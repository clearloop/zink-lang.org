"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const budgetLabels = [
  { label: "50 USDC", value: "budget-$50" },
  { label: "100 USDC", value: "budget-$100" },
  { label: "150 USDC", value: "budget-$150" },
];

export default function Budgets() {
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(budgetLabels[0].value); // Default to the first tab

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/zink-lang/zink/issues?labels=${activeTab}&state=all`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const budgetIssues = await response.json();
        setIssues(budgetIssues);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, [activeTab]); // Fetch issues whenever the active tab changes

  return (
    <div className="flex flex-col h-page max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-left">Budgets</h1>
      <p className="mb-4 text-left">
        The budget issues on this page are designed to onboard new contributors
        to{" "}
        <Link
          href="https://github.com/zink-lang/zink"
          target="_blank"
          className="hover:underline"
        >
          Zink
        </Link>
        . You can also create new issues and propose them as budget items!
      </p>

      {/* Tabs for Budget Labels */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {budgetLabels.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeTab}>
          {/* Content can be added here if needed */}
        </TabsContent>
      </Tabs>

      {loading && <p>Loading issues...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="mt-4 space-y-4">
        {issues.map((issue) => (
          <li
            key={issue.id}
            className={`p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow ${
              issue.state === "closed" ? "border-gray-800" : "border-gray-300"
            }`} // Darker border for closed issues
          >
            <div className="flex items-center">
              <a
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex-grow"
              >
                <h2 className="text-xl font-semibold">
                  {issue.title} #{issue.number}
                </h2>
              </a>
              {issue.assignee && (
                <div className="flex items-center ml-2 space-x-2">
                  <img
                    src={issue.assignee.avatar_url}
                    alt={`${issue.assignee.login}'s avatar`}
                    className="w-6 h-6 rounded-full ml-1" // Avatar styling
                  />
                  <span className="text-gray-500">{issue.assignee.login}</span>
                </div>
              )}
            </div>
            {issue.labels.length > 0 && (
              <div className="mt-2">
                {issue.labels.map((label: any) => (
                  <span
                    key={label.id}
                    className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded-full mr-1`}
                    style={{ backgroundColor: `#${label.color}` }}
                  >
                    {label.name}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

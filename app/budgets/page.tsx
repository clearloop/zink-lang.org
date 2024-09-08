"use client";
import { useEffect, useState } from "react";

export default function Budgets() {
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/zink-lang/zink/issues"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setIssues(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div className="flex flex-col h-page max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-left">Budgets</h1>
      {loading && <p>Loading issues...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="mt-4 space-y-4">
        {issues.map((issue) => (
          <li
            key={issue.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <a
              href={issue.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <h2 className="text-xl font-semibold">{issue.title}</h2>
            </a>
            <p className="text-gray-500">
              #{issue.number} opened by {issue.user.login}
            </p>
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

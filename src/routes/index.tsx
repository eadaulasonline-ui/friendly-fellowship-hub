import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flor Azul" },
      {
        name: "description",
        content: "Uma página azul com uma flor centralizada.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-600 p-6">
      <div
        className="flex items-center justify-center"
        role="img"
        aria-label="Flor no centro da página"
      >
        <svg
          viewBox="0 0 240 240"
          className="h-44 w-44 drop-shadow-2xl sm:h-56 sm:w-56"
          aria-hidden="true"
        >
          <ellipse cx="120" cy="57" rx="34" ry="51" fill="#f9a8d4" />
          <ellipse
            cx="120"
            cy="183"
            rx="34"
            ry="51"
            fill="#f9a8d4"
          />
          <ellipse
            cx="57"
            cy="120"
            rx="51"
            ry="34"
            fill="#fbcfe8"
          />
          <ellipse
            cx="183"
            cy="120"
            rx="51"
            ry="34"
            fill="#fbcfe8"
          />
          <ellipse
            cx="76"
            cy="76"
            rx="32"
            ry="46"
            transform="rotate(-45 76 76)"
            fill="#f472b6"
          />
          <ellipse
            cx="164"
            cy="76"
            rx="32"
            ry="46"
            transform="rotate(45 164 76)"
            fill="#f472b6"
          />
          <ellipse
            cx="76"
            cy="164"
            rx="32"
            ry="46"
            transform="rotate(45 76 164)"
            fill="#f472b6"
          />
          <ellipse
            cx="164"
            cy="164"
            rx="32"
            ry="46"
            transform="rotate(-45 164 164)"
            fill="#f472b6"
          />
          <circle cx="120" cy="120" r="42" fill="#fde047" />
          <circle cx="120" cy="120" r="24" fill="#facc15" />
        </svg>
      </div>
    </main>
  );
}

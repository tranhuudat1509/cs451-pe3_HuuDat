# README.md

## Input
The application accepts input from the user through a `TextInput` component. Users type in new tasks and press the "Add Todo" button to save them. The input field only appears in the "All" tab to ensure new tasks are not pre-filtered.

## Process
The app tracks todos in a `todos` array, with each item containing a unique index, title, and completed status. State updates trigger re-renders to show the latest todos. The app filters todos based on the selected tab: "All", "Active", or "Completed". Console logs capture the full todos list whenever a new task is added, meeting Part 1's requirements.

## Output
The app displays filtered todos based on the selected tab. Completed tasks show with a visual indicator, and all tasks have "Complete" and "Delete" buttons for easy management.

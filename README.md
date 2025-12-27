# Kanban Board Script

## Overview
This JavaScript file implements a fully functional Kanban board system with drag-and-drop capabilities, persistent local storage, and task management features. The application provides three columns (To Do, In Progress, Done) for organizing tasks through an intuitive web interface.

## Core Components

### 1. Column Management
- **Column Selection**: Three main columns are defined: `todo`, `progress`, and `done`
- **Column Array**: All columns are stored in a unified array for consistent processing
- **Task Counting**: Each column dynamically displays its current task count in the header

### 2. Task Structure
Each task card contains:
- Title (heading element)
- Description (paragraph element)
- Delete button for task removal
- Draggable functionality for column transfers

### 3. Modal System
A popup modal interface handles new task creation with:
- Toggle functionality for showing/hiding the modal
- Background click dismissal
- Form validation to prevent empty task submissions
- Input clearing after successful task creation

### 4. Drag-and-Drop System
- **Drag State Management**: Tracks the currently dragged task element
- **Draggable Setup**: Makes each task element draggable with appropriate event handlers
- **Drop Zone Configuration**: Each column serves as a drop target with proper event prevention
- **Visual Feedback**: Provides seamless drag visual experience

### 5. Data Persistence
- **Local Storage Integration**: Automatically saves all tasks and their column positions
- **Data Structure**: Stores tasks as objects with title and description properties, organized by column ID
- **Automatic Recovery**: Loads previous session data on page initialization
- **Real-time Updates**: Persists changes immediately after any modification

## Key Functionalities

### Task Creation
- Creates structured task elements with complete DOM components
- Attaches delete functionality with storage updates
- Applies draggable properties to new tasks
- Validates input before creation

### Task Management
- **Deletion**: Removes tasks with associated storage updates
- **Movement**: Allows drag-and-drop between columns
- **Counting**: Updates column task counts after any changes
- **Organization**: Maintains task order within columns

### Storage Operations
- **Saving**: Serializes all task data to localStorage
- **Loading**: Recovers and recreates tasks from saved data
- **Synchronization**: Ensures UI always reflects stored state

### User Interface
- **Modal Control**: Smooth modal transitions and interactions
- **Form Handling**: Manages task input and validation
- **Visual Updates**: Real-time counter updates and task rendering
- **Error Prevention**: Alerts users for invalid inputs

## Workflow Logic

1. **Initialization**: Loads existing tasks from localStorage on page load
2. **Task Addition**: Users open modal → fill details → create task → auto-save
3. **Task Movement**: Drag task → drop in target column → update storage
4. **Task Deletion**: Click delete button → remove task → update storage and counts
5. **Data Persistence**: Every change triggers automatic storage synchronization

## Event Flow
- **Click Events**: Modal toggling, task deletion, form submission
- **Drag Events**: Drag start, drag end, dragover, drop
- **Storage Events**: Automatic save on any task modification
- **Form Events**: Validation, submission, and cleanup

## Data Flow
User Interaction → DOM Update → Storage Save → Count Update → UI Refresh

## Features
- **Persistent State**: Tasks survive browser refresh/restart
- **Responsive Design**: Works with drag-and-drop on compatible devices
- **Input Validation**: Prevents creation of incomplete tasks
- **Clean Interface**: Modal-based task creation minimizes clutter
- **Instant Feedback**: Real-time counter updates and visual changes

## User Experience
- Intuitive drag-and-drop task management
- Visual task counting per column
- Clear task structure with title and description
- Simple delete functionality
- Preventative validation with helpful alerts
- Seamless modal interactions

## Learned from @Sheryians Coding School

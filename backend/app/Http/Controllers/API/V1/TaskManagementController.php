<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskManagementController extends Controller
{
    public function tasks() {
        try {
            $tasks = Task::where('status', 'pending')->get();
            return response()->json([
                'data' => $tasks,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    public function create(Request $request) {
        try {
            $task = new Task();
            $task->title = $request->input('title');
            $task->description = $request->input('description');
            $task->save();
            return response()->json([
                'message' => 'Task created successfully',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
    }


    public function task($id) {
        try {
            $task = Task::findOrFail($id);
            return response()->json([
                'data' => $task,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    public function update($id) {
        try {
            $task = Task::findOrFail($id);
            $task->status = 'completed';
            $task->update();
            return response()->json([
                'message' => 'Task complated successfully',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
    }
    
}

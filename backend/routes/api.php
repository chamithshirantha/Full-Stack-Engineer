<?php

use App\Http\Controllers\API\V1\TaskManagementController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/v1/create', [TaskManagementController::class, 'create'])->name('create');
Route::get('/v1/tasks', [TaskManagementController::class, 'tasks'])->name('tasks');
Route::get('/v1/task/{id}', [TaskManagementController::class, 'task'])->name('task');
Route::put('/v1/task/{id}', [TaskManagementController::class, 'update'])->name('update');




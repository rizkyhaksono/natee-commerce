<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SellingItemsController;
use App\Http\Controllers\AdminSellingItemsController;
use Illuminate\Support\Facades\Route;

Route::get('/', [SellingItemsController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminSellingItemsController::class, 'index'])->name('admin.dashboard');
    Route::get('/admin/items', [AdminSellingItemsController::class, 'index'])->name('admin.items.index');
    Route::get('/admin/items/{item}', [AdminSellingItemsController::class, 'show'])->name('admin.items.show');
    Route::get('/admin/items/{item}/edit', [AdminSellingItemsController::class, 'edit'])->name('admin.items.edit');
    Route::put('/admin/items/{item}', [AdminSellingItemsController::class, 'update'])->name('admin.items.update');
    Route::delete('/admin/items/{item}', [AdminSellingItemsController::class, 'destroy'])->name('admin.items.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/checkout', [SellingItemsController::class, 'checkout'])->name('checkout');
    Route::post('/items', [SellingItemsController::class, 'store']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

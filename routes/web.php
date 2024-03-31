<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SellingItemsController;
use App\Models\SellingItem;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [SellingItemsController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $items = SellingItem::all();

        return Inertia::render('Dashboard', [
            'items' => $items
        ]);
    })->name('dashboard');

    Route::get('/explore', function () {
        return Inertia::render('Explore');
    })->name('explore');

    Route::get('checkout', function () {
        return Inertia::render('Checkout');
    })->name('checkout');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

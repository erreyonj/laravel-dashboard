<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('AdminDash');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact', function () {
    return Inertia::render('Contact/index');
})->name('contact');

Route::get('/team', function () {
    return Inertia::render('Teams/index');
})->name('team');

Route::get('/invoice', function () {
    return Inertia::render('Invoices/index');
})->name('invoice');

Route::get('/form', function () {
    return Inertia::render('Form/index');
})->name('form');

Route::get('/calendar', function () {
    return Inertia::render('Calendar/index');
})->name('calendar');

Route::get('/faq', function () {
    return Inertia::render('Faq/index');
})->name('faq');

Route::get('/bar', function () {
    return Inertia::render('Bar/index');
})->name('bar');

Route::get('/line', function () {
    return Inertia::render('Line/index');
})->name('line');

Route::get('/pie', function () {
    return Inertia::render('Pie/index');
})->name('pie');

Route::get('/geo', function () {
    return Inertia::render('Geo/index');
})->name('geo');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellingItem extends Model
{
    use HasFactory;

    protected $table = 'selling_items';

    protected $fillable = [
        'title',
        'description',
        'quantity',
        'price',
    ];
}

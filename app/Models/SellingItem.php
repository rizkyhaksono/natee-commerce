<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function buyer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'buyer_id');
    }
}

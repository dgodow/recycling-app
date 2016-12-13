'use strict'

var itemTotals = {
  cans: 0,
  newspaper: 0,
  glass_bottles: 0,
  plastic_bottles: 0,
  aluminum_foil: 0,
  batteries: 0
};

var recyclingVals = {
  cans: 0.1,
  newspaper: 0.05,
  glass_bottles: 0.1,
  plastic_bottles: 0.15,
  aluminum_foil: 0.05,
  batteries: 0.5
}

var $increaseButtons = $('.btn-success');
var $decreaseButtons = $('.btn-danger');

$(function increaseQuantity () {
  $('.table').on('click', '.btn-success', function () {
    var $btnId = $(this).parent().attr('id');
    var $btnTxt = $(this).parent().find('.num');
    itemTotals[$btnId]++;
    $btnTxt.html(itemTotals[$btnId]);

    var $total = $('.item-selector-total').find('.totalValue');
    var currentTotal = $total.text();
    var newTotal = Number(currentTotal) + recyclingVals[$btnId];
    // console.log($total);
    // console.log(currentTotal);
    $total.html(Math.round(newTotal*100) / 100);
  })
})

$(function decreaseQuantity () {
  $('.table').on('click', '.btn-danger', function () {
    var $btnId = $(this).parent().attr('id');
    var $btnTxt = $(this).parent().find('.num');
    itemTotals[$btnId]--;
    $btnTxt.html(itemTotals[$btnId]);

    var $total = $('.item-selector-total').find('.totalValue');
    var currentTotal = $total.text();
    var newTotal = Number(currentTotal) - recyclingVals[$btnId];
    // console.log($total);
    // console.log(currentTotal);
    $total.html(Math.round(newTotal*100) / 100);
  })
})
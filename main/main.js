const loadAllItems = require('./loadAllItems.js');
var items = loadAllItems();
var cart = [];

module.exports = function main(inputs) {
	inputs.forEach(input => addToCart(input))
	var inventory = printInventory();
     return inventory;

function addToCart(item) {
	for (var i = items.length - 1; i >= 0; i--) {
		if (isInCart(item)) {
			return ;
		}else { 
			if (items[i].barcode == item){
			items[i].quantity = 1;
			cart.push(items[i]);
			return ;
			}
		}
	}
}	

function isInCart(query) {
			for (var i = cart.length - 1; i >= 0; i--) {
				if(cart[i].barcode == query){
					cart[i].quantity ++;
					return true;
				}else{
					return false;
				}
			}
		}	

function printInventory() {
	var inventory = '***<没钱赚商店>购物清单***\n';
	var total = 0.00;

	for (var i =0; i < cart.length; i++) {
		var name = cart[i].name; var quantity = cart[i].quantity; var unit = cart[i].unit; var price = (cart[i].price).toFixed(2); var subTotal = (price * quantity).toFixed(2);
		inventory +=	'名称：'+ name + '，'+'数量：'+ quantity + unit + '，单价：'+ price +'(元)，小计：'+ subTotal + '(元)\n'; 
		total = total + (price*quantity);
	}
	inventory += '----------------------\n' +
		    	'总计：'+ total.toFixed(2) +'(元)\n' +
            	'**********************';	
     return inventory; 	
	}		
}; 







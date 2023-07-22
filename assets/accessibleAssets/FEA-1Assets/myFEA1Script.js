
        let cartAmount = 0;
            let cartPriceTotal = 0;

            let myOrder = {};
            const myCartItems = document.getElementById('myCartItems');

            function addToCart(item, price){
                if(myOrder[item] == undefined){
                    myOrder[item] = 1;
                }else{
                    myOrder[item] += 1;
                }
                cartPriceTotal += price;
                updateCartPrice();
                updateCartAmount();
                updateMyOrderList(item,price);      
            }

            function updateMyOrderList(item, price){
                myCartItems.innerHTML = '';
                for(let key in myOrder){
                    myCartItems.innerHTML += `
                    <div class="d-flex justify-content-between">
                    <div>${key}</div>
                    <div>${myOrder[key]}</div>
                    </div>`;
                }
                console.log(myOrder);
            }

            function updateCartAmount(){
                cartAmount += 1; 
                console.log(cartAmount);
                document.getElementById('cartItemNumber').innerHTML = cartAmount;
            }

            function updateCartPrice(){
                document.getElementById('cartPrice').innerHTML = cartPriceTotal;
            }
            
            function clearCart(){
                myOrder = {};
                cartAmount = 0;
                cartPriceTotal = 0;
                updateCartPrice();
                updateCartAmount();
                updateMyOrderList();
            }

            function resetProgram(){
                location.reload();
            }

            function checkOut(){
                if(cartPriceTotal == 0){
                    alert("Please add items to your cart!");
                    console.log("No items in cart!");
                    return;
                }
                alert("Thank you for your purchase!"+"\nYour total amount is ₱" + cartPriceTotal);
                console.log("Thank you for your purchase!"+"\nYour total amount is ₱" + cartPriceTotal)
                resetProgram();
            }
   
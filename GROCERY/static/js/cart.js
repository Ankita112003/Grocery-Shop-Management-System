var updateBtns=document.getElementsByClassName('update-cart')
for(var i=0; i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId=this.dataset.product
        var action=this.dataset.action
        console.log('productId:',productId,'action:',action)
        console.log('User:',user)
        if(user=='Anonymous user'){
            console.log('user is not authenticated')
        }
        else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    console.log('user is logged in,sending data...')
    var url='/update_item/'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ 'productId': productId, 'action': action })
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        console.log('data:', data);
        location.reload();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
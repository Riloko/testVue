<template>
    <div class="cart__card">
        <div class="cart__card-image">
            <img :src="product.img1" alt="image--first" class="cart__card-image--first">
            <img :src="product.img2" alt="image--second" class="cart__card-image--second">
        </div>
        <div class="cart__card-info">
            <p class="cart__card-info--name">{{product.text}}</p>
            <p class="cart__card-info--size">Размер: {{product.size}}</p>
            <div class="cart__card-info--color">Цвет:  
                <div :style="{background: product.color, height: '15px', width: '15px', marginLeft: '5px'}"></div>
            </div>
            <div class="cart__card-info--count">Количество: {{product.count}} шт</div>
            <div class="cart__card-info--price">Цена за штуку: {{product.price}} руб   /   Сумма: {{product.price * product.count}} руб</div>
        </div> 
        <button v-on:click="onItemRemove" class="cart__card--rmv">&times;</button>       
    </div>
</template>

<script>
import './assets/cartCard.sass';

export default {
    name: 'CartCard',
    props: {
        product: Object,
        onItemRemove: Function
    }
}
</script>

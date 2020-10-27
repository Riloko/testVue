<template>
    <div class="card">
        <div class="card__header">{{product.text}}</div>
        <div class="card__body">
            <div class="card__body-image">
                <img class="card__body-image--first" :src="product.img1" alt="first">
                <img class="card__body-image--second" :src="product.img2" alt="second">
            </div>
            <div class="card__body-info">
                <PropSelector :items="product.size" :type="'size'" :onItemSelected="onItemSelected" />
                <PropSelector :items="product.color" :type="'color'" :onItemSelected="onItemSelected" />
            </div>
            <div class="card__body-price">
                <div v-if="product.sale" class="card__body-price-summ--old">
                    {{product.price}} руб
                </div>
                <div v-if="product.sale" class="card__body-price-summ--new">
                    {{Math.ceil(product.price * 0.85)}} руб
                </div>
                <div v-if="!product.sale" class="card__body-price-summ">
                    {{product.price}} руб
                </div>
            </div>
            <div class="card__body-controls">
                <div class="card__body-controls--count">
                    <button class="card__body-controls--count-less" v-on:click="onCountDecrease">-</button>
                    <div class="card__body-controls--count-view">{{addData.count}}</div>
                    <button class="card__body-controls--count-more" v-on:click="onCountIncrease">+</button>
                </div>
                <button class="card__body-controls--add" v-on:click="onAddToCart">Добавить</button>
            </div>
        </div>
        <div v-if="product.sale" class="card__sale">Sale</div>
        <div class="card__brand">{{product.brand}}</div>
        <div v-if="product.sex" class="card__sex">{{product.sex}}</div>
    </div>
</template>

<script>
import './assets/catalogCard.sass';
import PropSelector from '@/components/propSelector/propSelector';

    export default {
        name: "CatalogCard",
        props: {
            product: Object
        },
        components: {
            PropSelector
        },
        data: function () {
            let addData = {
                count: 1,
            };
            return {
                addData
            }
        },
        methods: {
            onCountDecrease: function () {
                if (this.addData.count > 1) {
                    this.addData.count--
                }
            },

            onCountIncrease: function () {
                this.addData.count++
            },

            onItemSelected: function (item, type)  {
                this.addData[type] = item;
            },
            
            createDataForCart: function () {
                this.addData.id = this.product.id;
                this.addData.price = this.product.sale ? Math.ceil(this.product.price * 0.85) : this.product.price;
                this.addData.img1 = this.product.img1;
                this.addData.img2 = this.product.img2;
                this.addData.text = this.product.text;
            },

            compareProductsInCart: function () {
                const cartCards = this.$store.state.cart.cartItems;
                const sameProductIndex = cartCards.findIndex(({size, color, id}) => id === this.addData.id && size === this.addData.size && color === this.addData.color);
                if (sameProductIndex != -1) {
                    this.updateSameProduct(sameProductIndex);
                } else {
                    this.addToCart();
                }

            },

            addToCart: function () {
                const cartCards = this.$store.state.cart.cartItems;
                this.$store.dispatch('addProductToCart', [
                    ...cartCards,
                    this.addData
                ]);
            },

            updateSameProduct: function (sameProductIndex) {
                const cartCards = this.$store.state.cart.cartItems;
                const updatableProduct = cartCards[sameProductIndex];
                updatableProduct.count += this.addData.count;
                
                this.$store.dispatch('addProductToCart', [
                    ...cartCards.slice(0, sameProductIndex),
                    updatableProduct,
                    ...cartCards.slice(sameProductIndex, cartCards.length - 1)
                ]);

                this.addData.count = 1;
            },

            onAddToCart: function () {
                this.createDataForCart();                

                if (!this.addData.color) {
                    alert('Пожалуйста выберите цвет');
                } else {
                    if (!this.addData.size) {
                        alert('Пожалуйста выберите размер');
                    } else {
                        this.compareProductsInCart();
                    }
                }
            }
        }
    }
</script>
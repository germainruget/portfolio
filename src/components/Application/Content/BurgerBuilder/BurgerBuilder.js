import React, { Component, Fragment } from 'react';

import Burger from './components/Burger/Burger';
import BuildControls from './components/Burger/BuildControls/BuildControls';
import OrderSummary from './components/Burger/OrderSummary/OrderSummary';
import Modal from './components/UI/Modal/Modal';
import Spinner from './components/UI/Spinner/Spinner';


const INGREDIENT_PRICES = {
   salad: .5,
   meat: 3.5,
   cheese: .75,
   onions: .5,
   ketchup: .25,
   pickles: .5,
}

class BurgerBuilder extends Component {

   state = {
      ingredients: [],
      ingredientsCount: {"salad":0,"meat":0,"cheese":0,"onions":0,"ketchup":0,"pickles":0},
      ingredientsType: ["salad","meat","cheese","onions","ketchup","pickles"],
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false
   }

   updatePurchasableState = (ingredients) => {
      const sum = Object.keys(ingredients).map(igKey => {
         return ingredients[igKey];
      }).reduce((sum, el) => {
         return sum + el;

      }, 0);

      this.setState({
         purchasable: sum > 0
      })
   }

   addIngredientHandler = (type) => {
      console.log(type);
      const oldCount = this.state.ingredientsCount[type];
      const udpatedCount = oldCount + 1;
      const updatedIngredients = {
         ...this.state.ingredientsCount,
      }
      updatedIngredients[type] = udpatedCount;

      const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;

      this.ingredientsOrder(type, true);

      this.setState({
         ingredientsCount: updatedIngredients,
         totalPrice: newPrice
      });

      this.updatePurchasableState(updatedIngredients);
   }

   removeIngredientHandler = (type, index) => {
      const oldCount = this.state.ingredientsCount[type];
      if (oldCount <= 0) return;

      const udpatedCount = oldCount - 1;
      const updatedIngredients = {
         ...this.state.ingredientsCount,
      }
      updatedIngredients[type] = udpatedCount;

      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

      this.ingredientsOrder(type, false, index);

      this.setState({
         ingredientsCount: updatedIngredients,
         totalPrice: newPrice
      });
      this.updatePurchasableState(updatedIngredients);
   }

   ingredientsOrder = (type, add = true, index) => {

      const oldIngredientsOrder = this.state.ingredients;
      let updatedIngredientsOrder = oldIngredientsOrder;

      if (add) {
         updatedIngredientsOrder.unshift(type);
      }
      else {
         let lastIngredientIndex = updatedIngredientsOrder.indexOf(type);

         if (index !== undefined) {
            lastIngredientIndex = index;
         }

         updatedIngredientsOrder.splice(lastIngredientIndex, 1);
      }


      this.setState({
         ingredients: updatedIngredientsOrder,
      });
   }

   purchaseHandler = () => {
      if (this.state.purchasable) {
         const purchasingState = this.state.purchasing;
         this.setState({
            purchasing: !purchasingState
         })
      }
   }

   purchaseContinueHandler = () => {
      alert("DONE");
   }

   render() {
      //If no ingredients, disable the corresponding less button;
      const disableInfo = { ...this.state.ingredientsCount };
      for (let ing in disableInfo) {
         disableInfo[ing] = disableInfo[ing] <= 0
      }

      let orderSummary = null;
      if(this.state.ingredientsCount){
         orderSummary = <OrderSummary ingredientsCount={this.state.ingredientsCount} cancel={this.purchaseHandler} continue={this.purchaseContinueHandler} price={this.state.totalPrice} />
      }
      if(this.state.loading) orderSummary = <Spinner />;

      let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
      if(this.state.ingredients){
         burger = (
            <Fragment>
               <Burger ingredients={this.state.ingredients} removeIngredient={this.removeIngredientHandler} />
               <BuildControls
                     price={this.state.totalPrice}
                     ingredientAdded={this.addIngredientHandler}
                     ingredientRemoved={this.removeIngredientHandler}
                     disableInfo={disableInfo}
                     purchasable={this.state.purchasable}
                     purchasing={this.purchaseHandler} />
            </Fragment>
         );
      }

      return (
         <Fragment>
            <Modal show={this.state.purchasing} click={this.purchaseHandler}>
               {orderSummary} 
            </Modal>
            {burger}
         </Fragment>
      );
   }
}

export default BurgerBuilder;
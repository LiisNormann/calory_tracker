// Storage Controller (in the making)

//Item Controller
const ItemCtrl = (function() {
    //Item constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data structure
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Eggs', calories: 300}
        ],
        total: 0,
    }

    //makes data public, otherwise it won't be displayed
    return {
        logData: function() {
            return data
        }
    }
})();

//UI Controller
const UICtrl = (function() {

})();

//App Controller (responsible for the app startup)
const App = (function(ItemCtrl, UICtrl) {
    //to make the info public
    return {
        init: function() {
            console.log('Initializing App')
        }
    }
})(ItemCtrl, UICtrl);

//Initialize app
App.init();

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
        //makes item elements public
        getItems: function() {
            return data.items
        },
        addItem: function(name, calories) {
            let ID;
            //create ID
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                //if there is no data, then the added item id will be 0
                ID = 0;
            }
            //calories from text to number
            calories = parseInt(calories);
            //create new item
            newItem = new Item(ID, name, calories);
            //add to items array 
            data.items.push(newItem);
            //return new item so that it can be also used elsewhere
            return newItem;
            //control data
        },
        logData: function() {
            return data
        }
    }
})();

//UI Controller
const UICtrl = (function() {
    //UI selectors (all relevant selectors to be used in the app)
    const UISelectors = {
        itemList: '#item-list',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        addBtn: '.add-btn'
    }
    
    return {
        populateItemList: function(items) {
            //create html content
            let html = '';
            
            //parse data and create list items html
            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="fas fa-pencil-alt"></i>
                </a>
                </li>`
            });

            //insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function() {
            return UISelectors;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        }
    }
})();

//App Controller (responsible for the app startup)
const App = (function(ItemCtrl, UICtrl) {
    //load event listeners
    const loadEventListeners = function() {
        //get UI selectors
        const UISelectors = UICtrl.getSelectors();
        //add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }
    //item add submit function
    const itemAddSubmit = function(event) {
        //get form input from UI controller
        const input = UICtrl.getItemInput()
        //check for name and calorie input
        if(input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories)
            console.log(newItem)
        }
        event.preventDefault()
    }
    //to make the info public
    return {
        init: function() {
            //fetch items from data structure
            const items = ItemCtrl.getItems();
            //populate items list
            UICtrl.populateItemList(items);
            //load event listeners
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

//Initialize app
App.init();

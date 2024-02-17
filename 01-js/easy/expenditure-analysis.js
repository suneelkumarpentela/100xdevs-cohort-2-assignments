/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let n = transactions.length;

  let catObj = {};
  let ans = [];

  for( let i=0; i<n; i++ ){
    let cat = transactions[i]["category"];
    let price = transactions[i]["price"];

    if( !catObj.hasOwnProperty(cat) ){

      let catLen = ans.length;
      catObj[cat] = catLen;
      ans.push({ "category":cat, "totalSpent": price });
    }
    else{
      console.log( ans );
      ans[catObj[cat]]["totalSpent"] += price;
    }
  } 

  return ans;
}


module.exports = calculateTotalSpentByCategory;

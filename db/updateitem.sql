UPDATE sim1db
SET itemName = $1,
price = $2
WHERE shelf = $3 and bin =$4
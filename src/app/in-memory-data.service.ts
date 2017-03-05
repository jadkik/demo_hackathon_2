/**
 *  class that primes an in-memory database
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let beef = [
                {
                    id: '91',
                    product: 'Meat Argentnian Ribeye 100d Grn Fed Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 69999,
                    sale_price: 34999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '92',
                    product: 'Meat Avighon Steak Green Spiced PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 24999,
                    sale_price: 12499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '93',
                    product: 'Meat Beef Cordon Bleu Halal Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 15999,
                    sale_price: 7999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '94',
                    product: 'Meat Beef Cubes For Cooking Low Fat PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 15990,
                    sale_price: 7995,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '95',
                    product: 'Meat Beef Cubes For Cooking Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 9999,
                    sale_price: 4999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '96',
                    product: 'Meat Beef Cubes Mawzet PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14990,
                    sale_price: 7495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '97',
                    product: 'Meat Beef Escalope Fresh Perkg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 16990,
                    sale_price: 8495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '98',
                    product: 'Meat Beef Faux Fillet Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14999,
                    sale_price: 7499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '99',
                    product: 'Meat Beef Fillet Portion Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 29999,
                    sale_price: 14999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '100',
                    product: 'Meat Beef Grain Fed 100d Cube Roll Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 59999,
                    sale_price: 29999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '101',
                    product: 'Meat Beef Heel Muscle Perkg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 12999,
                    sale_price: 6499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '102',
                    product: 'Meat Beef Mince Habra PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 15990,
                    sale_price: 7995,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '103',
                    product: 'Meat Beef Mince Regular PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 12999,
                    sale_price: 6499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '104',
                    product: 'Meat Beef Ribeye Portion PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 21999,
                    sale_price: 10999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '105',
                    product: 'Meat Beef Striplion Portion PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 24999,
                    sale_price: 12499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '106',
                    product: 'Meat Beef Strogonof Tender Portion PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 21999,
                    sale_price: 10999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '107',
                    product: 'Meat Bifteak Portion PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 16990,
                    sale_price: 8495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '108',
                    product: 'Meat Chicken Breast Fresh PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14999,
                    sale_price: 7499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '109',
                    product: 'Meat Chicken Tawouk PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 12990,
                    sale_price: 6495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '110',
                    product: 'Meat Classic American Burger PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 19990,
                    sale_price: 9995,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '111',
                    product: 'Meat Kafta Balls',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14990,
                    sale_price: 7495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '112',
                    product: 'Meat Lamb Cultlets Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 31999,
                    sale_price: 15999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '113',
                    product: 'Meat Odessa Paprika Steak PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 24990,
                    sale_price: 12495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '114',
                    product: 'Meat Orange Chili Steak PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 24990,
                    sale_price: 12495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '115',
                    product: 'Meat Piri Piri Hot Steak Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 24990,
                    sale_price: 12495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '116',
                    product: 'Meat Steak Low Fat Portion PER KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 16990,
                    sale_price: 8495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '117',
                    product: 'Meat/House Beef Chawarma Fresh Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14990,
                    sale_price: 7495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '118',
                    product: 'Meat/House Beef Chawarma Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 9999,
                    sale_price: 4999,
                    sold_on_sale: 0,
                    total_commission: 0
                }
        ];

        let chicken = [
                {
                    id: '81',
                    product: 'Chicken Breast Herbery Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 13999,
                    sale_price: 6999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '82',
                    product: 'Chicken Chicken Liver Loose Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 8999,
                    sale_price: 4499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '83',
                    product: 'Chicken Cubes Breast Fresh Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14999,
                    sale_price: 7499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '84',
                    product: 'Chicken Curry Lemon Breast Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14999,
                    sale_price: 7499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '85',
                    product: 'Chicken Escalope Fresh Perkg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 16990,
                    sale_price: 8495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '86',
                    product: 'Chicken Garlic Herbs Chicken Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14990,
                    sale_price: 7495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '87',
                    product: 'Chicken Odessa Paprika Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14990,
                    sale_price: 7495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '88',
                    product: 'Chicken Piri Piri Hot Chicken Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14999,
                    sale_price: 7499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '89',
                    product: 'Chicken Poitrine De Poulet Gratin Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 15990,
                    sale_price: 7995,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '90',
                    product: 'Chicken Strogonoff Breast Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 15990,
                    sale_price: 7995,
                    sold_on_sale: 0,
                    total_commission: 0
                }        
        ];

        let fruits_and_vegetables = [
                {
                    id: '41',
                    product: 'Runner Beans Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 13999,
                    sale_price: 6999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '42',
                    product: 'Apple Imported Golden Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7999,
                    sale_price: 3999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '43',
                    product: 'Green Olives Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7750,
                    sale_price: 3875,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '44',
                    product: 'Green Olives Almonds Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 13750,
                    sale_price: 6875,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '45',
                    product: 'Almond Supreme 200g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 6250,
                    sale_price: 3125,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '46',
                    product: 'Apple Extra Double Red Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2500,
                    sale_price: 1250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '47',
                    product: 'Apple Gala Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3999,
                    sale_price: 1999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '48',
                    product: 'Apple Gala Royal Imported Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 9999,
                    sale_price: 4999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '49',
                    product: 'Apple Golden Extra Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2500,
                    sale_price: 1250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '50',
                    product: 'Apple Imported Granny Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7999,
                    sale_price: 3999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '51',
                    product: 'Apple Red Imported Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7999,
                    sale_price: 3999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '52',
                    product: 'Artichoke Local 1 Pc',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 899,
                    sale_price: 449,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '53',
                    product: 'Asparagus Green Imported 350 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 16999,
                    sale_price: 8499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '54',
                    product: 'Avocado Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4999,
                    sale_price: 2499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '55',
                    product: 'Banana Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 1399,
                    sale_price: 699,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '56',
                    product: 'Banana Somali Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4500,
                    sale_price: 2250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '57',
                    product: 'Basil 40g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2750,
                    sale_price: 1375,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '58',
                    product: 'Basil Extra Local Bunch',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2500,
                    sale_price: 1250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '59',
                    product: 'Beetroot Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 1999,
                    sale_price: 999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '60',
                    product: 'Biomass Avocado 1kg 1000g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 11500,
                    sale_price: 5750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '61',
                    product: 'Biomass Capsicum 500 G 500g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3990,
                    sale_price: 1995,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '62',
                    product: 'Black Olive Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 9750,
                    sale_price: 4875,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '63',
                    product: 'Black Olives A Koura Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4995,
                    sale_price: 2497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '64',
                    product: 'Black Olives Lux Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 12250,
                    sale_price: 6125,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '65',
                    product: 'Broccoli Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '66',
                    product: 'Cabbage Chinese 1 Pc',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2500,
                    sale_price: 1250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '67',
                    product: 'Cabbage Red Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3500,
                    sale_price: 1750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '68',
                    product: 'Cabbage White Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 999,
                    sale_price: 499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '69',
                    product: 'Capsicum Green Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3999,
                    sale_price: 1999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '70',
                    product: 'Capsicum Orange Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 6999,
                    sale_price: 3499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '71',
                    product: 'Capsicum Red Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '72',
                    product: 'Capsicum Yellow Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '73',
                    product: 'Carrot Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 999,
                    sale_price: 499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '74',
                    product: 'Cashew Nuts 200g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 6750,
                    sale_price: 3375,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '75',
                    product: 'Cauliflower',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 999,
                    sale_price: 499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '76',
                    product: 'Celery Local Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7999,
                    sale_price: 3999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '77',
                    product: 'Chayote Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 11999,
                    sale_price: 5999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '78',
                    product: 'Cherry Tomato Punnet 300 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2999,
                    sale_price: 1499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '79',
                    product: 'Chilli Green Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3999,
                    sale_price: 1999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '80',
                    product: 'Chilli Red Loose Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 6999,
                    sale_price: 3499,
                    sold_on_sale: 0,
                    total_commission: 0
                }
        ];

        let dairy = [
                {
                    id: '121',
                    product: 'Auchan Bio Mozzarella 125 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '122',
                    product: 'Auchan Brie 1/2 Ecreme 200 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4999,
                    sale_price: 2499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '123',
                    product: 'Auchan Emmental Rape 200 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '124',
                    product: 'Ferrarini Bresaola Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 74995,
                    sale_price: 37497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '125',
                    product: 'Ferrarini Cooked Ham Azzurro Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14995,
                    sale_price: 7497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '126',
                    product: 'Ferrarini Mortadella Anti Revelta Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14995,
                    sale_price: 7497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '127',
                    product: 'Ferrarini Mortadella Oregium Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 19995,
                    sale_price: 9997,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '128',
                    product: 'Ferrarini Parmegiano Regiano Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 39995,
                    sale_price: 19997,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '129',
                    product: 'Ferrarini Rustica Piccante Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 34995,
                    sale_price: 17497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '130',
                    product: 'Ferrarini Salami Milano Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 34995,
                    sale_price: 17497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '131',
                    product: 'Ferrarini Salami Parma Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 44995,
                    sale_price: 22497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '132',
                    product: 'Ferrarini Turkey Breast Roast Per KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 22500,
                    sale_price: 11250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '133',
                    product: 'Hawa Mozarella Cheese Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14995,
                    sale_price: 7497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '134',
                    product: 'Spinneys Akawi Cheese Prepacked Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 16500,
                    sale_price: 8250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '135',
                    product: 'Spinneys Ayran 250 ml',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 550,
                    sale_price: 275,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '136',
                    product: 'Spinneys Bulgarian Cheese Cow 200G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2999,
                    sale_price: 1499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '137',
                    product: 'Spinneys Bulgarian Cheese Sheep 200G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4999,
                    sale_price: 2499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '138',
                    product: 'Spinneys Double Crème Cheese Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14500,
                    sale_price: 7250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '139',
                    product: 'Spinneys Laban 1KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2399,
                    sale_price: 1199,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '140',
                    product: 'Spinneys Laban 2KG',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4199,
                    sale_price: 2099,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '141',
                    product: 'Spinneys Labneh 400G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3399,
                    sale_price: 1699,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '142',
                    product: 'Spinneys Labneh Low Fat 400G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3899,
                    sale_price: 1949,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '143',
                    product: 'Spinneys Premium Kashkaval Cow 300G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4999,
                    sale_price: 2499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '144',
                    product: 'Spinneys Premium Kashkaval Cow 600G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7999,
                    sale_price: 3999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '145',
                    product: 'Spinneys Premium Kashkaval Sheep 300G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7250,
                    sale_price: 3625,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '146',
                    product: 'Spinneys Premium Kashkaval Sheep 600G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 12999,
                    sale_price: 6499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '147',
                    product: 'Spinneys Prepacked Akkawi Cheese Low Fat Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 17000,
                    sale_price: 8500,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '148',
                    product: 'Spinneys Prepacked Halloum Cheese Low Fat Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 17500,
                    sale_price: 8750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '149',
                    product: 'Spinneys Prepacked Halloum Cheese Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 17000,
                    sale_price: 8500,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '150',
                    product: 'Basdras Hot Kashkaval Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 39995,
                    sale_price: 19997,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '151',
                    product: 'Amour Kashkaval Cow 700 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 10500,
                    sale_price: 5250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '152',
                    product: 'Argal Bacon Estilo Tradicional Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 17500,
                    sale_price: 8750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '153',
                    product: 'Argal Jambon Cocido Bonnatur Oro Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14995,
                    sale_price: 7497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '154',
                    product: 'Argal Jamon Asado Bonnatur Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14995,
                    sale_price: 7497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '155',
                    product: 'Argal Jamon Cocido Argal S/M Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 14995,
                    sale_price: 7497,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '156',
                    product: 'Argal Jamon Montanera 7 Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 199999,
                    sale_price: 99999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '157',
                    product: 'Argal Pan De Chorizo Regio Oro Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 29995,
                    sale_price: 14997,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '158',
                    product: 'Argal Pan De Salchichon Regio Oro Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 29995,
                    sale_price: 14997,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '159',
                    product: 'Argal Pate Finas Hierb 2kg 1 Un Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 19999,
                    sale_price: 9999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '160',
                    product: 'Argal Pate Pimienta Nerga 2kg 1un Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 19999,
                    sale_price: 9999,
                    sold_on_sale: 0,
                    total_commission: 0
                }
        ];

        let grains = [
                {
                    id: '1',
                    product: 'Petit Four Loose Assorted Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 19990,
                    sale_price: 9995,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '2',
                    product: 'Spinneys Cereal Toast 360G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4999,
                    sale_price: 2499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '3',
                    product: 'Spinneys Natural Toast 360G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4999,
                    sale_price: 2499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '4',
                    product: 'Spinneys Oat Toast 360G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4999,
                    sale_price: 2499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '5',
                    product: 'Spinneys Thym Toast 360G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4999,
                    sale_price: 2499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '6',
                    product: 'Baguette Multi-Cereal 1 Piece Each',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 1750,
                    sale_price: 875,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '7',
                    product: 'Loaf Pain De Mie Blanche 1 Pc',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2250,
                    sale_price: 1125,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '8',
                    product: 'Spinneys Medium White Arabic Bread 400 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 990,
                    sale_price: 495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '9',
                    product: 'Loaf Pain De Mie Cereal 1 Pc',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2250,
                    sale_price: 1125,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '10',
                    product: 'Mini Burger Buns 9 Pieces',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3000,
                    sale_price: 1500,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '11',
                    product: 'Spinneys Medium Brown Bread 400 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 1250,
                    sale_price: 625,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '12',
                    product: 'Auchan Mini Gache Natural Ure 360 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 8500,
                    sale_price: 4250,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '13',
                    product: 'Dry Cake Pound Cake Raisin 700 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 6990,
                    sale_price: 3495,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '14',
                    product: 'Al Asr Tannour Big',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 2000,
                    sale_price: 1000,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '15',
                    product: 'Baguette Blanche 1 Pc',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 1500,
                    sale_price: 750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '16',
                    product: 'Baguette Cereal 1 Pc',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 1750,
                    sale_price: 875,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '17',
                    product: 'Cereal Tartines Sarrasin Bio 145G',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 6250,
                    sale_price: 3125,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '18',
                    product: 'Crusty Sandwich Brown 1 Pc',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 400,
                    sale_price: 200,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '19',
                    product: 'Crusty Sandwich White 1 Pc',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 150,
                    sale_price: 75,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '20',
                    product: 'Dry Cake Muffins Chocolate 6 Pcs',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3500,
                    sale_price: 1750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '21',
                    product: 'Dry Cake Muffins Vanilla 6 Pcs',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '22',
                    product: 'Dry Cake Pound Cake Chocolate 700g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '23',
                    product: 'Dry Cake Pound Cake Marble 700 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '24',
                    product: 'Dry Cake Pound Cake Plain 700 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 5999,
                    sale_price: 2999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '25',
                    product: "Harry's 8 Doo Wap Pepite Chocolat 330 g",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 9999,
                    sale_price: 4999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '26',
                    product: "Harry's Brioche Tranche Pep 1 Pc",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 11999,
                    sale_price: 5999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '27',
                    product: "Harry's Pain 100% Mie Complet  500 g",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 11500,
                    sale_price: 5750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '28',
                    product: "Harry's Pain 100% Mie Natural Ure 500 g",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 11500,
                    sale_price: 5750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '29',
                    product: "Harry's Sandwich American 1 Pc",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 9999,
                    sale_price: 4999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '30',
                    product: "Harry's Sandwich American 550 g",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 8999,
                    sale_price: 4499,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '31',
                    product: 'Hodgson Bread Mix 9 Grain 16oz',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7750,
                    sale_price: 3875,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '32',
                    product: 'Hodgson Bread Mix Honey Whole Wheat 16oz',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7500,
                    sale_price: 3750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '33',
                    product: 'Hodgson Bread Mix White 16oz',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7500,
                    sale_price: 3750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '34',
                    product: 'Jacquet Pain De Mie 450 g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 7999,
                    sale_price: 3999,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '35',
                    product: 'Kaak Mini Fingers Per Kg',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 4750,
                    sale_price: 2375,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '36',
                    product: 'Lu Cracotte Complete 250g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 6250,
                    sale_price: 3125,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '37',
                    product: 'Lu Cracotte Gourmande 250g',
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 6250,
                    sale_price: 3125,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '38',
                    product: "Maxim's Diet Toast 330g",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3500,
                    sale_price: 1750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '39',
                    product: "Maxim's Diet Toast Unsalted 330g",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 3500,
                    sale_price: 1750,
                    sold_on_sale: 0,
                    total_commission: 0
                },
                {
                    id: '40',
                    product: "Pain D'or Bread Arabic 360 g",
                    valid_for: 30,
                    start_discount: 7,
                    original_price: 999,
                    sale_price: 499,
                    sold_on_sale: 0,
                    total_commission: 0
                }
        ];

        return { beef, chicken, dairy, fruits_and_vegetables, grains };
    }
}

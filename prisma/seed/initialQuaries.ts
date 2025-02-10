import { seedConfigContactBusinessQueries } from './initial.config_contact_business';
import { seedMainConfig } from './initial.config_USA_stripe_shippo';
import { seedProductCategories } from './initial.product_categories';
import { seedProducts } from './initial.products';

console.log('Seeding initial data...');

seedConfigContactBusinessQueries();
seedMainConfig();
seedProductCategories();
seedProducts();

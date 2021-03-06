A custom module for [kitchencollection.com](https://www.kitchencollection.com).

## How to install
```
bin/magento maintenance:enable
composer require kitchencollection.com/core:*
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
sudo chown -R -v apache . && sudo chgrp -R -v dspangler .
rm -rf pub/static/* && bin/magento setup:static-content:deploy en_US --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy en_US --area frontend --theme Codazon/fastest_food_drink
sudo service httpd restart
bin/magento cache:enable
bin/magento maintenance:disable
```

## How to upgrade
```
bin/magento maintenance:enable
composer clear-cache
composer update kitchencollection.com/core
bin/magento setup:upgrade
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
sudo chown -R -v apache . && sudo chgrp -R -v dspangler .
rm -rf pub/static/* && bin/magento setup:static-content:deploy en_US --area adminhtml --theme Magento/backend && bin/magento setup:static-content:deploy en_US --area frontend --theme Codazon/fastest_food_drink
sudo service httpd restart
bin/php bin/magento cache:enable
bin/magento maintenance:disable
```

If you have problems with these commands, please check the [detailed instruction](https://mage2.pro/t/263).
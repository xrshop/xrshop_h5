/* All components used by swiper are defined in one file to prevent repeated construction */

// Swiper Class
import Swiper from 'swiper/src/components/core/core-class';

// Core Modules
import Device from 'swiper/src/modules/device/device';
import Support from 'swiper/src/modules/support/support';
import Browser from 'swiper/src/modules/browser/browser';
import Resize from 'swiper/src/modules/resize/resize';
import Observer from 'swiper/src/modules/observer/observer';

// IMPORT_COMPONENTS
import Autoplay from 'swiper/src/components/autoplay/autoplay';
import Pagination from 'swiper/src/components/pagination/pagination';

const components = [
  Device,
  Support,
  Browser,
  Resize,
  Observer,
  // INSTALL_COMPONENTS
  Autoplay,
  Pagination,
];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);

// EXPORT
export default Swiper;

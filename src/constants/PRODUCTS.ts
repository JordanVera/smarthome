import { Product } from '@/types/product';

const PRODUCTS: Product[] = [
  // SMART SWITCHES
  {
    id: 'switch-001',
    name: 'Shelly 1PM Mini Gen4',
    category: 'Switches',
    price: 25.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41XyzABC123._AC_SL1000_.jpg',
    description:
      'Ultra-compact Wi-Fi & Zigbee relay with power metering, Matter support',
    manufacturer: 'Shelly',
    purchaseLink: 'https://amazon.com/dp/B0D2H4K9J7',
  },
  {
    id: 'switch-002',
    name: 'Shelly 1 Mini Gen3',
    category: 'Switches',
    price: 18.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31MnoRST789._AC_SL1000_.jpg',
    description:
      'Smallest Wi-Fi relay switch, fits behind standard wall switches',
    manufacturer: 'Shelly',
    purchaseLink: 'https://amazon.com/dp/B0BXYZ987F',
  },
  {
    id: 'switch-003',
    name: 'Shelly Plus 1PM',
    category: 'Switches',
    price: 21.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41PqrSTU012._AC_SL1000_.jpg',
    description:
      'Wi-Fi smart relay with power metering and temperature protection',
    manufacturer: 'Shelly',
    purchaseLink: 'https://amazon.com/dp/B09JKLM345',
  },
  {
    id: 'switch-004',
    name: 'Shelly 2.5PM',
    category: 'Switches',
    price: 29.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41ABC123DEF._AC_SL1000_.jpg',
    description:
      'Dual channel Wi-Fi switch/roller shutter controller with power metering',
    manufacturer: 'Shelly',
    purchaseLink: 'https://amazon.com/dp/B08GHIJ456',
  },
  {
    id: 'switch-005',
    name: 'Lutron Caseta Wireless Smart Dimmer Switch',
    category: 'Switches',
    price: 49.95,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41MnoQRS456._AC_SL1000_.jpg',
    description:
      'Professional-grade smart dimmer with neutral wire compatibility',
    manufacturer: 'Lutron',
    purchaseLink: 'https://amazon.com/dp/B017LRCG38',
  },
  {
    id: 'switch-006',
    name: 'Aqara Smart Wall Switch H1 (Zigbee)',
    category: 'Switches',
    price: 24.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31KLM789NOP._AC_SL1000_.jpg',
    description: 'Zigbee 3.0 wall switch with no neutral wire required',
    manufacturer: 'Aqara',
    purchaseLink: 'https://amazon.com/dp/B08QRST901',
  },
  {
    id: 'switch-007',
    name: 'SONOFF Zigbee Smart Switch',
    category: 'Switches',
    price: 15.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41XyzABC789._AC_SL1000_.jpg',
    description:
      'In-wall Zigbee smart switch with scheduling and remote control',
    manufacturer: 'SONOFF',
    purchaseLink: 'https://amazon.com/dp/B08H1J2K3L',
  },
  {
    id: 'switch-008',
    name: 'Philips Hue Dimmer Switch',
    category: 'Switches',
    price: 24.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31wNrLNOz4L._AC_SL1000_.jpg',
    description: 'Wireless dimmer switch, wall mountable or portable use',
    manufacturer: 'Philips',
    purchaseLink: 'https://amazon.com/dp/B00MQJ73ZG',
  },

  // SMART OUTLETS
  {
    id: 'outlet-001',
    name: 'TP-Link Kasa Smart Wi-Fi Plug HS103P4',
    category: 'Outlets',
    price: 24.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31OpqRST567._AC_SL1000_.jpg',
    description: '4-pack mini smart plugs with scheduling and remote control',
    manufacturer: 'TP-Link',
    purchaseLink: 'https://amazon.com/dp/B07B8W2KHZ',
  },
  {
    id: 'outlet-002',
    name: 'SONOFF Zigbee 3.0 Smart Plug',
    category: 'Outlets',
    price: 12.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31DefGHI012._AC_SL1000_.jpg',
    description: 'Compact Zigbee smart plug with energy monitoring',
    manufacturer: 'SONOFF',
    purchaseLink: 'https://amazon.com/dp/B09M5N6O7P',
  },
  {
    id: 'outlet-003',
    name: 'Aqara Smart Plug (Zigbee)',
    category: 'Outlets',
    price: 16.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41UVW234XYZ._AC_SL1000_.jpg',
    description:
      'Zigbee 3.0 smart plug with power monitoring and compact design',
    manufacturer: 'Aqara',
    purchaseLink: 'https://amazon.com/dp/B085G7H8I9',
  },
  {
    id: 'outlet-004',
    name: 'Leviton Decora Smart Wi-Fi Outlet',
    category: 'Outlets',
    price: 39.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41ABC890DEF._AC_SL1000_.jpg',
    description:
      'In-wall smart outlet with app and voice control, 2 controllable outlets',
    manufacturer: 'Leviton',
    purchaseLink: 'https://amazon.com/dp/B01MU3K2ZR',
  },
  {
    id: 'outlet-005',
    name: 'Shelly Plug S',
    category: 'Outlets',
    price: 14.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31GHI567JKL._AC_SL1000_.jpg',
    description: 'Wi-Fi smart plug with power metering and overload protection',
    manufacturer: 'Shelly',
    purchaseLink: 'https://amazon.com/dp/B07GVH8I23',
  },

  // THERMOSTATS
  {
    id: 'thermostat-001',
    name: 'Google Nest Learning Thermostat (4th Gen)',
    category: 'Thermostats',
    price: 249.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41WxyzAB123._AC_SL1000_.jpg',
    description: 'AI-powered learning thermostat with energy-saving features',
    manufacturer: 'Google',
    purchaseLink: 'https://amazon.com/dp/B09JQKSHT3',
  },
  {
    id: 'thermostat-002',
    name: 'Google Nest Thermostat',
    category: 'Thermostats',
    price: 129.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41WxyzAB123._AC_SL1000_.jpg',
    description:
      'Energy-efficient smart thermostat with mobile app control and scheduling',
    manufacturer: 'Google',
    purchaseLink: 'https://amazon.com/dp/B08HRHHPKW',
  },
  {
    id: 'thermostat-003',
    name: 'Ecobee SmartThermostat Premium',
    category: 'Thermostats',
    price: 249.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41UvwXYZ890._AC_SL1000_.jpg',
    description: 'Smart thermostat with built-in air quality monitor and Alexa',
    manufacturer: 'Ecobee',
    purchaseLink: 'https://amazon.com/dp/B09XXX1J2K',
  },
  {
    id: 'thermostat-004',
    name: 'Honeywell T9 Smart Thermostat',
    category: 'Thermostats',
    price: 199.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31MNO456PQR._AC_SL1000_.jpg',
    description:
      'Smart thermostat with remote room sensors for multi-zone control',
    manufacturer: 'Honeywell',
    purchaseLink: 'https://amazon.com/dp/B07N1234ST',
  },

  // SMART LIGHTS
  {
    id: 'light-001',
    name: 'Philips Hue White and Color Ambiance A19 Starter Kit',
    category: 'Lights',
    price: 199.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61J2jvqP8fL._AC_SL1000_.jpg',
    description:
      '4-pack color changing smart bulbs with bridge, compatible with all assistants',
    manufacturer: 'Philips',
    purchaseLink: 'https://amazon.com/dp/B07354S4KS',
  },
  {
    id: 'light-002',
    name: 'Philips Hue White Ambiance A19 4-Pack',
    category: 'Lights',
    price: 99.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51STU789VWX._AC_SL1000_.jpg',
    description:
      'White spectrum smart bulbs with warm to cool white adjustment',
    manufacturer: 'Philips',
    purchaseLink: 'https://amazon.com/dp/B073168F4Y',
  },
  {
    id: 'light-003',
    name: 'Philips Hue Lightstrip Plus 2M',
    category: 'Lights',
    price: 79.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61YZA234BCD._AC_SL1000_.jpg',
    description: 'Flexible LED lightstrip with millions of colors, extendable',
    manufacturer: 'Philips',
    purchaseLink: 'https://amazon.com/dp/B0167H33DU',
  },
  {
    id: 'light-004',
    name: 'Philips Hue Outdoor Lightstrip 5M',
    category: 'Lights',
    price: 99.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61wKX9QPGHL._AC_SL1000_.jpg',
    description:
      'Weather-resistant LED lightstrip for outdoor use, millions of colors',
    manufacturer: 'Philips',
    purchaseLink: 'https://amazon.com/dp/B07ZS1NJN8',
  },
  {
    id: 'light-005',
    name: 'Philips Hue Go Portable Smart Light',
    category: 'Lights',
    price: 79.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41EFG567HIJ._AC_SL1000_.jpg',
    description: 'Portable smart light with battery, perfect for any room',
    manufacturer: 'Philips',
    purchaseLink: 'https://amazon.com/dp/B00UVHAC1O',
  },
  {
    id: 'light-006',
    name: 'Sengled Zigbee Smart Bulb E11-G13',
    category: 'Lights',
    price: 8.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31KLM901NOP._AC_SL1000_.jpg',
    description:
      'Affordable Zigbee smart bulb with dimming, works with most hubs',
    manufacturer: 'Sengled',
    purchaseLink: 'https://amazon.com/dp/B01MAYHGU8',
  },
  {
    id: 'light-007',
    name: 'LIFX Color A19 Wi-Fi Smart Bulb',
    category: 'Lights',
    price: 44.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41QRS678TUV._AC_SL1000_.jpg',
    description: 'Wi-Fi smart bulb with 16 million colors, no hub required',
    manufacturer: 'LIFX',
    purchaseLink: 'https://amazon.com/dp/B073168B47',
  },

  // SMART LOCKS
  {
    id: 'lock-001',
    name: 'Yale Assure Lock 2 with Wi-Fi',
    category: 'Locks',
    price: 279.0,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31TuvWXY789._AC_SL1000_.jpg',
    description: 'Keypad smart lock with built-in Wi-Fi and mobile app control',
    manufacturer: 'Yale',
    purchaseLink: 'https://amazon.com/dp/B08Z1X2Y3Z',
  },
  {
    id: 'lock-002',
    name: 'August Wi-Fi Smart Lock (4th Gen)',
    category: 'Locks',
    price: 229.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41WXY345ZAB._AC_SL1000_.jpg',
    description:
      'Retrofit smart lock with built-in Wi-Fi, works with existing deadbolt',
    manufacturer: 'August',
    purchaseLink: 'https://amazon.com/dp/B0829V6F4K',
  },
  {
    id: 'lock-003',
    name: 'Schlage Encode Smart WiFi Deadbolt',
    category: 'Locks',
    price: 249.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31CDE789FGH._AC_SL1000_.jpg',
    description: 'Built-in WiFi smart lock with keypad, no hub required',
    manufacturer: 'Schlage',
    purchaseLink: 'https://amazon.com/dp/B07JBGZ3QY',
  },
  {
    id: 'lock-004',
    name: 'Kwikset Halo Wi-Fi Smart Lock',
    category: 'Locks',
    price: 199.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41IJK123LMN._AC_SL1000_.jpg',
    description:
      'Keypad smart lock with Wi-Fi connectivity and SmartKey technology',
    manufacturer: 'Kwikset',
    purchaseLink: 'https://amazon.com/dp/B083QRST45',
  },
  {
    id: 'lock-005',
    name: 'Ultraloq U-Bolt Pro WiFi',
    category: 'Locks',
    price: 189.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41OPQ678RST._AC_SL1000_.jpg',
    description:
      '6-in-1 smart lock: WiFi, Bluetooth, keypad, key, fingerprint, smartphone',
    manufacturer: 'Ultraloq',
    purchaseLink: 'https://amazon.com/dp/B078UV9WX6',
  },

  // SENSORS
  {
    id: 'sensor-001',
    name: 'Philips Hue Motion Sensor',
    category: 'Sensors',
    price: 49.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41T7gJ6OJSL._AC_SL1000_.jpg',
    description:
      'Wireless motion sensor with daylight detection, battery-powered',
    manufacturer: 'Philips',
    purchaseLink: 'https://amazon.com/dp/B076MGK22M',
  },
  {
    id: 'sensor-002',
    name: 'Aqara Smart Motion Sensor P1',
    category: 'Sensors',
    price: 19.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31LmnOPQ123._AC_SL1000_.jpg',
    description: 'Zigbee 3.0 PIR motion sensor with 170° detection angle',
    manufacturer: 'Aqara',
    purchaseLink: 'https://amazon.com/dp/B08T1GJ7K5',
  },
  {
    id: 'sensor-003',
    name: 'Aqara Door and Window Sensor',
    category: 'Sensors',
    price: 14.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31UVW890XYZ._AC_SL1000_.jpg',
    description: 'Zigbee door/window sensor with 2-year battery life',
    manufacturer: 'Aqara',
    purchaseLink: 'https://amazon.com/dp/B07D19YXND',
  },
  {
    id: 'sensor-004',
    name: 'Shelly H&T Gen3',
    category: 'Sensors',
    price: 16.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41BcdEFG234._AC_SL1000_.jpg',
    description: 'Temperature and humidity sensor with 2-year battery life',
    manufacturer: 'Shelly',
    purchaseLink: 'https://amazon.com/dp/B0C1H5I9J2',
  },
  {
    id: 'sensor-005',
    name: 'Shelly Door/Window Gen3',
    category: 'Sensors',
    price: 14.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31HijKLM567._AC_SL1000_.jpg',
    description: 'Magnetic door/window sensor with ultra-long battery life',
    manufacturer: 'Shelly',
    purchaseLink: 'https://amazon.com/dp/B0D4N8O9P1',
  },
  {
    id: 'sensor-006',
    name: 'Tuya Zigbee Temperature Humidity Sensor',
    category: 'Sensors',
    price: 11.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41QrstuV345._AC_SL1000_.jpg',
    description: 'Zigbee 3.0 temperature and humidity sensor with LCD display',
    manufacturer: 'Tuya',
    purchaseLink: 'https://amazon.com/dp/B0B4W8X9Y2',
  },
  {
    id: 'sensor-007',
    name: 'Samsung SmartThings Multi Sensor',
    category: 'Sensors',
    price: 29.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31ABC456DEF._AC_SL1000_.jpg',
    description:
      '3-in-1 sensor: open/close, temperature, and vibration detection',
    manufacturer: 'Samsung',
    purchaseLink: 'https://amazon.com/dp/B01IE35PCC',
  },
  {
    id: 'sensor-008',
    name: 'Aqara Water Leak Sensor',
    category: 'Sensors',
    price: 19.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31GHI789JKL._AC_SL1000_.jpg',
    description: 'Zigbee water leak sensor with audible and app alerts',
    manufacturer: 'Aqara',
    purchaseLink: 'https://amazon.com/dp/B07PQMJQ4M',
  },

  // CAMERAS
  {
    id: 'camera-001',
    name: 'Google Nest Cam (Battery)',
    category: 'Cameras',
    price: 179.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31CdeFGH456._AC_SL1000_.jpg',
    description:
      'Wire-free security camera with intelligent alerts and 3-hour event history',
    manufacturer: 'Google',
    purchaseLink: 'https://amazon.com/dp/B08M7HF8WZ',
  },
  {
    id: 'camera-002',
    name: 'Google Nest Doorbell (Battery)',
    category: 'Cameras',
    price: 179.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41UvwXYZ345._AC_SL1000_.jpg',
    description:
      'Wire-free video doorbell with HDR video and intelligent alerts',
    manufacturer: 'Google',
    purchaseLink: 'https://amazon.com/dp/B08L7Q9DY6',
  },
  {
    id: 'camera-003',
    name: 'Philips Hue Secure Camera',
    category: 'Cameras',
    price: 249.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41yB2qD5BfL._AC_SL1000_.jpg',
    description:
      'Wire-free security camera with AI-powered detection and local storage',
    manufacturer: 'Philips',
    purchaseLink: 'https://amazon.com/dp/B0C8PQWXYZ',
  },
  {
    id: 'camera-004',
    name: 'Ring Video Doorbell Pro 2',
    category: 'Cameras',
    price: 249.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31GhiJKL123._AC_SL1000_.jpg',
    description:
      'Advanced video doorbell with 3D motion detection and enhanced features',
    manufacturer: 'Ring',
    purchaseLink: 'https://amazon.com/dp/B08N5WRWNW',
  },
  {
    id: 'camera-005',
    name: 'Aqara Camera Hub G3',
    category: 'Cameras',
    price: 89.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41MNO234PQR._AC_SL1000_.jpg',
    description: 'Indoor security camera that doubles as Zigbee 3.0 hub',
    manufacturer: 'Aqara',
    purchaseLink: 'https://amazon.com/dp/B08L5VW9ZX',
  },
  {
    id: 'camera-006',
    name: 'Reolink Argus 3 Pro',
    category: 'Cameras',
    price: 109.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41STU567VWX._AC_SL1000_.jpg',
    description: '4MP wireless security camera with solar panel compatibility',
    manufacturer: 'Reolink',
    purchaseLink: 'https://amazon.com/dp/B08GHJK789',
  },

  // SPEAKERS
  {
    id: 'speaker-001',
    name: 'Sonos One (Gen 2)',
    category: 'Speakers',
    price: 219.0,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41MnoQRS901._AC_SL1000_.jpg',
    description: 'Smart speaker with Alexa and Google Assistant built-in',
    manufacturer: 'Sonos',
    purchaseLink: 'https://amazon.com/dp/B075M5T3RS',
  },
  {
    id: 'speaker-002',
    name: 'Sonos Era 100',
    category: 'Speakers',
    price: 249.0,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41FghIJK890._AC_SL1000_.jpg',
    description:
      'Compact smart speaker with exceptional sound quality and Bluetooth',
    manufacturer: 'Sonos',
    purchaseLink: 'https://amazon.com/dp/B0BXYZ1234',
  },
  {
    id: 'speaker-003',
    name: 'Sonos Arc',
    category: 'Speakers',
    price: 899.0,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31GhiJKL678._AC_SL1000_.jpg',
    description: 'Premium smart soundbar with Dolby Atmos and voice control',
    manufacturer: 'Sonos',
    purchaseLink: 'https://amazon.com/dp/B087CD4VNJ',
  },
  {
    id: 'speaker-004',
    name: 'Sonos Move 2',
    category: 'Speakers',
    price: 449.0,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31TuvWXY234._AC_SL1000_.jpg',
    description:
      'Portable smart speaker with battery, Bluetooth and Wi-Fi connectivity',
    manufacturer: 'Sonos',
    purchaseLink: 'https://amazon.com/dp/B0C4H7J8K9',
  },
  {
    id: 'speaker-005',
    name: 'Google Nest Mini (2nd Gen)',
    category: 'Speakers',
    price: 49.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61OpqRST012._AC_SL1000_.jpg',
    description:
      'Compact smart speaker with Google Assistant for voice control',
    manufacturer: 'Google',
    purchaseLink: 'https://amazon.com/dp/B07YMQ7NTL',
  },
  {
    id: 'speaker-006',
    name: 'Google Nest Audio',
    category: 'Speakers',
    price: 99.99,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51YZA678BCD._AC_SL1000_.jpg',
    description:
      'Premium smart speaker with powerful sound and Google Assistant',
    manufacturer: 'Google',
    purchaseLink: 'https://amazon.com/dp/B08KRHZ4GT',
  },
  {
    id: 'speaker-007',
    name: 'Sonos Sub (Gen 3)',
    category: 'Speakers',
    price: 749.0,
    image:
      'https://images-na.ssl-images-amazon.com/images/I/31ZabCDE567._AC_SL1000_.jpg',
    description:
      'Wireless subwoofer for deep bass, pairs with any Sonos speaker',
    manufacturer: 'Sonos',
    purchaseLink: 'https://amazon.com/dp/B07G8J7Z3Q',
  },
];

export default PRODUCTS;

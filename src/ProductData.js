const products= [
    {
      "type": "SUV",
      "name": "Toyota RAV4",
      "image": "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/3246/",
      "price": 30000,
      "discount_price": 28000
    },
    {
      "type": "Sedan",
      "name": "Honda Accord",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2023_Honda_Accord_EX_in_Canyon_River_Blue_Metallic%2C_Front_Left%2C_04-07-2023.jpg/420px-2023_Honda_Accord_EX_in_Canyon_River_Blue_Metallic%2C_Front_Left%2C_04-07-2023.jpg",
      "price": 25000,
      "discount_price": 23000
    },
    {
      "type": "Truck",
      "name": "Ford F-150",
      "image": "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/trucks/f150/brand_f-150/desktop/24_frd_f15_kr_scc5_rprd_ps34_Desktop.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
      "price": 40000,
      "discount_price": 38000
    },
    {
      "type": "SUV",
      "name": "Nissan Rogue",
      "image": "https://cars.usnews.com/static/images/Auto/izmo/i159615418/2023_nissan_rogue_angularfront.jpg",
      "price": 27000,
      "discount_price": null
    },
    {
      "type": "Sedan",
      "name": "Chevrolet Malibu",
      "image": "https://di-uploads-development.dealerinspire.com/miamilakesautomall/uploads/2023/02/Malibu-Miami-Lakes-Automall-1038x550-1.jpeg",
      "price": 22000,
      "discount_price": 21000
    },
    {
      "type": "Truck",
      "name": "Ram 1500",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk4xTZHm_5jLCMrkDDW8mEB_ojGoB5iRJMTQ&s",
      "price": 45000,
      "discount_price": null
    },
    {
      "type": "SUV",
      "name": "Honda CR-V",
      "image": "https://evault.honda.com.my/pixelvault/2023-12/16c5de472691cc9ecf20ee2d8603c2da4da3f4ab61946.jpg",
      "price": 28000,
      "discount_price": 26500
    },
    {
      "type": "Sedan",
      "name": "Toyota Camry",
      "image": "https://global.toyota/pages/models/images/camry/camry_010_s.jpg",
      "price": 24000,
      "discount_price": 22500
    },
    {
      "type": "Truck",
      "name": "Chevrolet Silverado",
      "image": "https://cgi.chevrolet.com/mmgprod-us/dynres/prove/image.gen?i=2024/CK10543/CK10543__2CX/GNO_0ST_1SZ_2CX_2ST_3ST_4AA_4ST_5FC_5ST_6TJ_7TH_8AZ_9AZ_A2X_A68_A7E_AED_AEQ_AKO_AL0_AQQ_AU3_AVI_AXG_AXK_AY0_AZ3_B30_B32_B33_BPH_BTM_BTV_BWN_C49_C59_C5W_C67_CGN_CTT_D31_D72_DLF_DNS_E35_E63_EF7_ENL_F_F48_FE9_FJW_G80_GPZ_GU6_H0U_IOR_IVN_J24_J61_JBP_JHD_K34_K47_KC5_KC9_KI4_KL9_KW5_L3B_MAH_MFC_MSL_N06_N33_NB5_NK5_NQH_NTB_NZZ_PCX_PED_PPW_PRF_QK1_QT5_R3O_R7Q_RD1_RFQ_RM7_RSR_RVS_SAF_SLM_SU4_SU7_T8Z_TDM_TQ5_U2K_U73_UBI_UBJ_UDC_UE1_UE4_UEU_UF2_UGA_UH5_UHX_UHY_UIR_UJN_UKJ_UMN_UQF_URC_UTJ_UVB_V8D_VB5_VRF_VRG_VRH_VRK_VRL_VRM_VRN_VRR_VSX_VT5_VT7_VV4_WMI_WMY_X88_XCQ_YM8_Z7X_Z82gmds2.jpg&v=deg01&std=true&country=US",
      "price": 42000,
      "discount_price": 40000
    },
    {
      "type": "SUV",
      "name": "Ford Escape",
      "image": "https://www.cnet.com/a/img/resize/433d4b03d9283183abf539e3afbfe1b71544d73e/hub/2021/01/07/eef8101c-cde8-4ad5-a864-d8edfbd6d4db/ford-escape-titanium-2021-736167.jpg?auto=webp&width=768",
      "price": 26000,
      "discount_price": null
    },
    {
      "type": "Sedan",
      "name": "Nissan Altima",
      "image": "https://www.cnet.com/a/img/resize/f6b56c89c3003e9164865eda39ee6c305ec88a45/hub/2018/12/31/314f6985-197a-4020-af73-64fed06f7a34/2019-nissan-altima-platinum-ogi-1.jpg?auto=webp&fit=crop&height=675&width=1200",
      "price": 23000,
      "discount_price": 21500
    },
    {
      "type": "Truck",
      "name": "GMC Sierra",
      "image": "https://media.ed.edmunds-media.com/gmc/sierra-1500/2024/oem/2024_gmc_sierra-1500_crew-cab-pickup_at4_fq_oem_1_1600.jpg",
      "price": 43000,
      "discount_price": 41000
    },
    {
      "type": "SUV",
      "name": "Mazda CX-5",
      "image": "https://d2s8i866417m9.cloudfront.net/photo/12207151/photo/thumb-a182c44361e1c66db6bec786ba6b216f.jpg",
      "price": 29000,
      "discount_price": 27500
    },
    {
      "type": "Sedan",
      "name": "Hyundai Sonata",
      "image": "https://s7d1.scene7.com/is/image/hyundai/2022-sonata-1?wid=1200&hei=630&qlt=85,0&fmt=webp",
      "price": 21000,
      "discount_price": 20000
    },
    {
      "type": "Truck",
      "name": "Toyota Tundra",
      "image": "https://www.motortrend.com/uploads/2023/09/2-2024-Toyota-Tundra-1974-LTD-front-view.jpg",
      "price": 46000,
      "discount_price": 44000
    },
    {
      "type": "SUV",
      "name": "Subaru Forester",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIbovCTQcMCRHLXCig78eeeg1D422ckfKzg&s",
      "price": 25000,
      "discount_price": null
    },
    {
      "type": "Sedan",
      "name": "Kia Optima",
      "image": "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/17q3/685270/2017-kia-optima-sedan-hybrid-and-plug-in-review-car-and-driver-photo-691356-s-original.jpg?crop=0.849xw:0.696xh;0.0769xw,0.102xh&resize=1200:*",
      "price": 22000,
      "discount_price": 21000
    },
    {
      "type": "Truck",
      "name": "Nissan Titan",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIAnAirv0EBkBboe6L_HazoAMGSlLfFXqXA&s",
      "price": 47000,
      "discount_price": 45000
    },
    {
      "type": "SUV",
      "name": "Jeep Cherokee",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzUk1bUPiXbv0rkf5fVlb_HVzVcizUSvnjw&s",
      "price": 27000,
      "discount_price": 25500
    },
    {
      "type": "Sedan",
      "name": "Volkswagen Passat",
      "image": "https://media.istockphoto.com/id/1640685588/photo/volkswagen-passat.jpg?s=612x612&w=0&k=20&c=89vBcz8lDiHxbEdMASqnQ26vRrikHK-mplIh-LqzaeE=",
      "price": 23000,
      "discount_price": 22000
    },
    {
      "type": "Truck",
      "name": "Ford Ranger",
      "image": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1688059664/autoexpress/2023/06/Ford%20Ranger%20Wildtrak%20001_eqfkqu.jpg",
      "price": 41000,
      "discount_price": null
    },
    {
      "type": "SUV",
      "name": "Chevrolet Equinox",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUn8mSVDWcVgupbwmB2xhmlxA6hTU-5il00A&s",
      "price": 26000,
      "discount_price": 24500
    },
    {
      "type": "Sedan",
      "name": "Mazda6",
      "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/2018_Mazda6_Sport_NAV%2B_Diesel_2.2_Front.jpg",
      "price": 24000,
      "discount_price": null
    },
    {
      "type": "Truck",
      "name": "Honda Ridgeline",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlaL52nxSSOJRqaXAHL7_XE6L81nDQrBVitg&s",
      "price": 44000,
      "discount_price": 42000
    },
    {
      "type": "SUV",
      "name": "Hyundai Santa Fe",
      "image": "https://s7d1.scene7.com/is/image/hyundai/2022-santa-fe-1?wid=1200&hei=630&qlt=85,0&fmt=webp",
      "price": 28000,
      "discount_price": 26500
    },
    {
      "type": "Sedan",
      "name": "Ford Fusion",
      "image": "https://cars.usnews.com/static/images/Auto/izmo/i58936364/2018_ford_fusion_angularfront.jpg",
      "price": 22000,
      "discount_price": 21000
    },
    {
      "type": "Truck",
      "name": "Chevrolet Colorado",
      "image": "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2024/trucks/colorado/nav/01-images/2024-colorado-4zr-glt-driver-front-3quarter-nav.jpg?imwidth=960",
      "price": 42000,
      "discount_price": null
    },
    {
      "type": "SUV",
      "name": "Kia Sorento",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjOk5BD74ETtIq-J0BV_gkA6ZzTR3hXk3ng&s",
      "price": 29000,
      "discount_price": 27500
    },
    {
      "type": "Sports Car",
      "name": "Porsche 911",
      "image": "https://imgd-ct.aeplcdn.com/1056x660/cw/ec/39232/Porsche-New-911-Exterior-153677.jpg?wm=1&q=80",
      "price": 100000,
      "discount_price": 95000
    },
    {
      "type": "Sports Car",
      "name": "Chevrolet Corvette",
      "image": "https://media.ed.edmunds-media.com/chevrolet/corvette/2024/oem/2024_chevrolet_corvette_coupe_e-ray_fq_oem_1_1600.jpg",
      "price": 90000,
      "discount_price": 85000
    },
    {
      "type": "Sports Car",
      "name": "Ford Mustang",
      "image": "https://media.istockphoto.com/id/820863404/photo/ford-mustang.jpg?s=612x612&w=0&k=20&c=58ajYzeJSW8hr7tU4kaEwalHTArjfDK_udrop-1fnxQ=",
      "price": 60000,
      "discount_price": 58000
    },
    {
      "type": "Sports Car",
      "name": "BMW M4",
      "image": "https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=",
      "price": 80000,
      "discount_price": 78000
    },
    {
      "type": "Sports Car",
      "name": "Audi R8",
      "image": "https://media.istockphoto.com/id/824121584/photo/audi-r8.jpg?s=612x612&w=0&k=20&c=mRDZjT5OboBkqp4GH7KPvkCA02dfDgZxAlyz4ozGcf8=",
      "price": 120000,
      "discount_price": 115000
    }
  ]

  export default products
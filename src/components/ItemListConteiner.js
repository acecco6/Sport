import "../assets/ItemListConteiner.css"

import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import React from "react";
import { useParams } from "react-router-dom";

function ItemListConteiner(props) {
    const productos=[
        {id:1,nombre:"iPhone 12 Pro Max",categori:1,procesador:"snapdragon",precio:305999,stock:6,imagen:"https://www.macstation.com.ar/img/productos/small/2187-1.jpg",descipcion:"procesador A14 Bionic, 256 GB de almacenamiento interno y triple cámara de 12+12+12 MP.",descuento:false},
        {id:2,nombre:"Motorola Moto G20",categori:1,procesador:"",precio:26999,stock:4,imagen:"https://s3-us-east-2.amazonaws.com/bandageek1/wp-content/uploads/2021/05/27224903/450_1000.jpg",descipcion:"procesador Octa-Core 1.8 GHz, cámara de 48+8+2+2 Mp y Memoria interna de 64 GB y expandible con una MicroSd hasta 256GB",descuento:false},
        {id:3,nombre:"Samsung Galaxy A22 ",categori:1,procesador:"",precio:38000,stock:2,imagen:"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/A22_Negro_Frete_min_149969d2c1.png",descipcion:"procesador Octa-Core (2.0GHz, 1.8GHz), cámara de 48+8+2+2 Mp y Memoria interna de 128 GB y expandible con una MicroSd hasta 1TB",descuento:false},
        {id:4,nombre:"LG K61",categori:1,procesador:"",precio:31999,stock:7,imagen:"https://www.peru-smart.com/wp-content/uploads/CELU321GRIS-128GB_0.jpg",descipcion:"Procesador Octa-Core (2.3GHz, 1.8GHz), cámara de 48+8+5+2 Mp Y Memoria interna de 128 GB y expandible con una MicroSd hasta 2 TB",descuento:false},
        {id:5,nombre:"Motorola Moto E6i",categori:1,procesador:"",precio:17499,stock:3,imagen:"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/PMTMRE_6_IN_01_1dc13aceb9.png",descipcion:"procesador Octa-Core 1.6 GHz, Cámara de 13+2 Mp. Memoria interna de 32 GB y expandible con una MicroSd hasta 128GB",descuento:false},                    
        {id:6,nombre:"Motorola Moto E7i Power",categori:1,procesador:"",precio:18999,stock:8,imagen:"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_E7i_Power_Naranja_Front_min_025a3c4347.png",descipcion:"procesador Octa-Core 1.6 GHz, cámara de 13+2 Mp y Memoria interna de 32 GB y expandible con una MicroSd hasta 1TB",descuento:false},
        {id:7,nombre:"LG K42",categori:1,procesador:"",precio:23999,stock:6,imagen:"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/LG_K42_Gray_Front_min_9dab629cb5.png",descipcion:"procesador Octa-Core de 2.0 GHz, cámara de 13+5+2+2 Mp y Memoria interna de 64 GB expandible con una MicroSd hasta 2 TB",descuento:false},
        {id:8,nombre:"Motorola Moto G100",categori:1,procesador:"",precio:89999,stock:2,imagen:"https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/PMTANG_1_HN_01_883a210555.png",descipcion:"procesador Octa-Core 3.2 GHz, cámara de 64+16+2 Mp+ToF y Memoria interna de 128 GB y expandible con una MicroSd hasta 1TB",descuento:false},
        {id:9,nombre:"Notebook HP 250 G7 - 15,6",categori:2,procesador:"Intel® Core™ i3-1005G1",precio:79976,stock:2,imagen:"https://www.computershopping.com.ar/Images/Productos/HP-250-G7-153B7LT_Foto0.jpg",descipcion:"Disco Rígido: SATA de 1 TB y 5400 rpm + SSD 240GB M2. Memoria Ram: 16GB de SDRAM DDR4-2666 Velocidades de transferencia de hasta 2666 MT/s. Pantalla: Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",descuento:false},
        {id:10,nombre:"Notebook HP 255 G7 - 15,6",categori:2,procesador:"AMD Ryzen™ 5 3500U",precio:115440,stock:2,imagen:"https://www.computershopping.com.ar/Images/Productos/HP-255-G7_Foto0.jpg",descipcion:"Disco Rígido: SATA de 1 TB y 5400 rpm + SSD 240GB M2. Memoria Ram: 8 GB de SDRAM DDR4-2666 Velocidades de transferencia de hasta 2666 MT/s. Pantalla: Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",descuento:false},
        {id:11,nombre:"Notebook HP 348 G7 - 14",categori:2,procesador:"Intel® Core™ i3-10110U",precio:81432,stock:2,imagen:"https://www.computershopping.com.ar/Images/Productos/2Q0D2LT_Foto0.jpg",descipcion:"Disco Rígido: SATA de 1 TB . Memoria Ram: 4GB de SDRAM DDR4-2666 Velocidades de transferencia de hasta 2666 MT/s. Pantalla: Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",descuento:false},
        {id:12,nombre:"Notebook HP 250 G8 - 15,6",categori:2,procesador:"Intel® Core™ i5-1035G1",precio:107120,stock:2,imagen:"https://www.computershopping.com.ar/Images/Productos/HP-250-G8_Foto0.jpg",descipcion:"Disco Rígido: SATA de 1 TB. Memoria Ram: 8GB de SDRAM DDR4-2666 Velocidades de transferencia de hasta 2666 MT/s. Pantalla: Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",descuento:false},
        {id:13,nombre:"Notebook HP 250 G7 - 15,6",categori:2,procesador:"Intel® Core™ i7-1065G7",precio:154960,stock:2,imagen:"https://www.computershopping.com.ar/Images/Productos/HP-250-G7-153B7LT_Foto0.jpg",descipcion:"Disco Rígido: SATA de 1 TB . Memoria Ram: 8GB de SDRAM DDR4-2666 Velocidades de transferencia de hasta 2666 MT/s. Pantalla: Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",descuento:false},
        {id:14,nombre:"Notebook HP 250 G8 - 15,6",categori:2,procesador:"Intel® Core™ i3-1005G1",precio:98800,stock:2,imagen:"https://www.computershopping.com.ar/Images/Productos/HP-250-G8_Foto0.jpg",descipcion:"Disco Rígido: SATA de 1 TB + SSD 256GB. Memoria Ram: 8GB de SDRAM DDR4-2666 Velocidades de transferencia de hasta 2666 MT/s. Pantalla: Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",descuento:false},
        {id:15,nombre:"Notebook HP 250 G8 - 15,6",categori:2,procesador:"Intel® Core™ i3-1005G1",precio:88400,stock:2,imagen:"https://www.computershopping.com.ar/Images/Productos/HP-250-G8_Foto0.jpg",descipcion:"Disco Rígido: SATA de 1 TB. Memoria Ram: 4GB de SDRAM DDR4-2666 Velocidades de transferencia de hasta 2666 MT/s. Pantalla: Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",descuento:false},
        {id:16,nombre:"Notebook HP 245 G7 - 14",categori:2,procesador:"AMD Ryzen™ 3 3250U",precio:78312,stock:2,imagen:"https://www.computershopping.com.ar/Images/Productos/HP-161D8LT_Foto0.jpg",descipcion:"Disco Rígido: SATA de 1 TB. Memoria Ram: 4GB de SDRAM DDR4-2666 Velocidades de transferencia de hasta 2666 MT/s. Pantalla: Pantalla con retroiluminación WLED HD SVA antirreflectante, de 15,6 en diagonal, 220 nits, 45 % de NTSC (1366 x 768)",descuento:false},
        {id:17,nombre:"Monitor Philips LCD 193V5LHSB2/55 de 18,5 - HDMI - VGA",categori:3,precio:22880,stock:6,imagen:"https://www.computershopping.com.ar/Images/Productos/193V5LHSB2-55_Foto0.jpg",descipcion:"Disfrutá de imágenes LED nítidas en esta pantalla de Philips. Ya que está equipada con HDMI y SmartControl Lite, es una opción fantástica.Un dispositivo HDMI Ready tiene todo el hardware necesario para admitir una entrada de interfaz multimedia de alta definición (HDMI). El cable HDMI permite la transmisión de audio y video digital de alta calidad con un solo cable desde una computadora o una fuente AV (como los sintonizadores, reproductores de DVD, receptores de A/V y cámaras de video).",descuento:false},
        {id:18,nombre:"Monitor LG LED 19M38A-B VGA de 18,5",categori:3,precio:19656,stock:6,imagen:"https://www.computershopping.com.ar/Images/Productos/19M38A-B_Foto0.jpg",descipcion:"Ideal para el hogar o la oficina, ahorrar energía y obtener una excelente calidad de imagen con colores nítidos y brillantes. Su resolución máxima es de 1366 x 768. El tiempo de respuesta es de 5 ms. Tiene conexión VGA. Compatible con PC y Mac.",descuento:false},
        {id:19,nombre:"Monitor LED LG 19,5 20MK400H-B - 5ms - HDMI - VGA",categori:3,precio:20072,stock:6,imagen:"https://www.computershopping.com.ar/Images/Productos/LOG-20MK400H-B_Foto0.jpg",descipcion:"- Mayor productividad hasta en 4 pantallas con el modo Screen Split Multipantalla - Protección antiparpadeo, y óptimo para leer en pantalla gracias al Modo Lectura - 16.7M colores de profundidad para imágenes más naturales - Opciones de color customizadas a un solo click - Estabilizador de Negros, que permite colores oscuros más diferenciados.",descuento:false},
        {id:20,nombre:"Monitor LED LG 22 22MN430H-B Full HD - Panel IPS - HDMI - VGA",categori:3,precio:23400,stock:6,imagen:"https://www.computershopping.com.ar/Images/Productos/22MN430H-B_Foto0.jpg",descipcion:"Tamaño (Pulgada): 21,5 / 54,6cm - Tipo panel: IPS - Gama de Colores (CIE 1931): 72% -Profundidad del Color (Nº Colores): 16,7 millones de colores - Tamaño de Pixel (mm): 0.2480 x 0.2480 mm - Formato/Aspecto: 16:9 - Resolución: 1920 x 1080 - Brillo: 250 cd/m2 (típ.) 200 cd/m2 (mín.) - Relación de contraste (original): 1000:1 (típ.) - Relación de contraste (mega): 1.000.000:1 - Tiempo de Respuesta (GTG): 5ms - Ángulo de Visión (CR≥10): 178/178 (CR≥10) - Tratamiento de superficies: Antirreflejo, 3H",descuento:false},
        {id:21,nombre:"Monitor LED LG 24 24MK430H-B Full HD - Panel IPS - HDMI - VGA",categori:3,precio:27456,stock:6,imagen:"https://www.computershopping.com.ar/Images/Productos/24MK430H-B_Foto0.jpg",descipcion:"- Tecnología IPS, que permite colores constantes a 178º de ángulo de visión - Mayor productividad hasta en 4 pantallas con el modo Screen Split Multipantalla - Protección antiparpadeo, y óptimo para leer en pantalla gracias al Modo Lectura - 16.7M colores de profundidad para imágenes más naturales - Opciones de color customizadas a un solo click",descuento:false},
        {id:22,nombre:"Monitor LED Samsung 27 LS27F350 Full HD con diseño Super Slim",categori:3,precio:33800,stock:6,imagen:"https://www.computershopping.com.ar/Images/Productos/S27F350FHU_Foto0.jpg",descipcion:" Panel Super Slim: Con tan solo 10 mm de espesor (parecido a una pluma ), el panel de una pieza tiene la mitad del grosor de un monitor Samsung estándar - Base circular sencilla: Una base sencilla y circular complementa elegantemente este delgado monitor - Estilizado panel trasero: El patrón horizontal del panel trasero es estilizado y con un acabado contemporáneo.",descuento:false},
        {id:23,nombre:"Monitor LED IPS Samsung 22 LF22T350 Full HD con diseño sin bordes",categori:3,precio:23400,stock:6,imagen:"https://www.computershopping.com.ar/Images/Productos/LF22T350FHL_Foto0.jpg",descipcion:"Diseño minimalista, máxima concentración. La pantalla sin borde en 3 lados aporta una estética limpia y moderna a cualquier entorno de trabajo. Además, en una configuración de varios monitores, las pantallas se alinean a la perfección para ofrecer una vista prácticamente sin interrupciones ni distracciones.",descuento:false},
        {id:24,nombre:"Monitor LED IPS Samsung 24 LF24T350 Full HD con diseño sin bordes",categori:3,precio:26000,stock:6,imagen:"https://www.computershopping.com.ar/Images/Productos/LF24T350FHLX_Foto0.jpg",descipcion:"Diseño minimalista, máxima concentración. La pantalla sin borde en 3 lados aporta una estética limpia y moderna a cualquier entorno de trabajo. Además, en una configuración de varios monitores, las pantallas se alinean a la perfección para ofrecer una vista prácticamente sin interrupciones ni distracciones. Descubre la experiencia tecnicolor desde cualquier punto. El panel IPS conserva la intensidad y claridad del color en cada centímetro de la pantalla. Incluso en una pantalla tan amplia, los tonos y las sombras lucen precisos desde prácticamente cualquier ángulo, sin decoloración.",descuento:false}
    ]

    let {id}=useParams()
    console.log(id)
    const [producto, setproducto] = useState([])    
    
    const getProducto=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos)
            },2000)
        })
    }
    
    useEffect(()=>{
        if (id!=undefined) {
            setproducto([])
            setTimeout(()=>{
                let items=productos.filter(i=>i.categori==id)
                setproducto(items)
            },2000)
            
        }else{
            setproducto([])
            getProducto().then((productos)=>setproducto(productos))
        }
        
    },[id])

    return(
        <div className="items">
            <ItemList items={producto} />
        </div>
    )
}
export default ItemListConteiner



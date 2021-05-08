import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { 
                id: 1,
                name: 'Смартфоны'
            },
            {
                id: 2,
                name: 'Пылесосы'
            },
            {
                id: 3,
                name: 'Холодильники'
            },
            {
                id: 4,
                name: 'Ноутбуки'
            }
        ]
        this._brands = [
            { 
                id: 1,
                name: 'Honor'
            },
            {
                id: 2,
                name: 'Apple'
            },
            {
                id: 3,
                name: 'Huawei'
            },
            {
                id: 4,
                name: 'Lenovo'
            },
        ]
        this._devices = [
            { id: 1, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
            { id: 2, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
            { id: 3, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
            { id: 4, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
            { id: 5, name: 'iphone 12', price: 50000, rating: 5, img: 'https://cdn.svyaznoy.ru/upload/iblock/8af/ruru_iphone12_q121_black_pdp-image-1b.jpg' },
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    
    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
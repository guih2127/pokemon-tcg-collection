const rarityOptions = subType => {
    if (subType) {
        if (subType.id === 'vmax') {
            return [
                {
                    id: null,
                    name: "All rarities",
                    value: null
                },
                {
                    id: 'holo',
                    name: 'Rare Holo Vmax',
                    value: 'holo'
                },
                {
                    id: 'rainbow',
                    name: 'Rainbow Vmax',
                    value: 'rainbow'
                },
                {
                    id: 'promo',
                    name: 'Promo Vmax',
                    value: 'promo'
                }
            ];
        };
    }
    
    return [
        {
            id: null,
            name: "All rarities",
            value: null
        }
    ];
}

export default rarityOptions;
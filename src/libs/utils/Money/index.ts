
export const formatRupiah = (angka:number, prefix:any) =>{
    let number_string = angka.toString().replace(/[^,\d]/g, '');
    let split = number_string.split(',');
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if(ribuan){
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.')
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
};

export const formatUSD = (money:any, prefix?: any) => {
    let number_string = money.toString().replace(/[^,\d]/g, '');
    let split = number_string.split(',');
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if(ribuan){
        let separator = sisa ? ',' : '';
        rupiah += separator + ribuan.join('.')
        console.log(rupiah)
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix === undefined ? rupiah : (rupiah ? '$' + rupiah : '');
}

export const getDiscount = (price: any, discount:any) =>{
    let getPrice = discount / 100 * price;
    return price - getPrice;
}

export const formatNumberUSD = (price: number) =>{
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export const formatNumberIDR = (price: any) =>{
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
}
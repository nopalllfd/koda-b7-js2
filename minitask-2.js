function discountTotal(price) {
  let purchaseTotal = price;
  let finalTotal = 0;

  if (purchaseTotal) {
    if (purchaseTotal > 500000) {
      if (purchaseTotal > 1000000) {
        finalTotal = purchaseTotal * 0.1;
        total = purchaseTotal - finalTotal;
        console.log(`Total diskon anda adalah ${finalTotal}, harga total adalah ${total}, dari ${purchaseTotal}`);
      } else {
        finalTotal = purchaseTotal * 0.05;
        total = purchaseTotal - finalTotal;
        console.log(`Total diskon anda adalah ${finalTotal}, harga total adalah ${total}, dari ${purchaseTotal}`);
      }
    } else {
      console.log(`Tidak dapat diskon, total belanja adalah ${purchaseTotal}`);
    }
  } else {
    console.log('Silahkan masukan ulang total pembelian');
  }
}

discountTotal(50000);

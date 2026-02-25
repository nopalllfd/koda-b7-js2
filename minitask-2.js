function discountTotal(purchaseTotal) {
  let finalTotal = 0;
  if (typeof purchaseTotal === 'number') {
    if (purchaseTotal > 500000) {
      if (purchaseTotal > 1000000) {
        finalTotal = purchaseTotal * 0.1;
        const total = purchaseTotal - finalTotal;
        console.log(`Total diskon anda adalah ${finalTotal}, harga total adalah ${total}, dari ${purchaseTotal}`);
      } else {
        finalTotal = purchaseTotal * 0.05;
        const total = purchaseTotal - finalTotal;
        console.log(`Total diskon anda adalah ${finalTotal}, harga total adalah ${total}, dari ${purchaseTotal}`);
      }
    } else {
      console.log(`Tidak dapat diskon, total belanja adalah ${purchaseTotal}`);
    }
  } else {
    console.log('Input harus number');
  }
}

discountTotal(1000000);

const guestbookGallery = document.querySelector('.guestbook-gallery');
if (guestbookGallery) {
  guestbookGallery.addEventListener('wheel', function(e) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      guestbookGallery.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}
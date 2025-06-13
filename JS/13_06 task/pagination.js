const pagination = {
    page: 1,
    total: null,

    default() {
        this.page = 1;
        this.total = null;
    },
    next() {
        this.page++;
    },
    prev() {
        if (this.page > 1) this.page--;
    }
}

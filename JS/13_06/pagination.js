const pagination = {
    limit: 20,
    skip: 0,
    total: null,
    page: 1,

    default() {
        this.limit = 20;
        this.skip = 0;
        this.total = null;
        this.page = 1;
    },
    next() {
        this.skip += this.limit;
        this.page++;
    },
    prev() {
        if (this.page <= 1) return;

        this.skip -= this.limit;
        this.page--;
    }
}

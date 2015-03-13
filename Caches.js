module.exports = function(status) {
    return {
        Misses: {
            Status: status.addItem("Cache Misses", {
                color: 'yellow',
                label: 'zfs commands'
            }),
        },
        Hits: {
            Status: status.addItem("Cache Hits", {
                color: 'green',
                label: 'zfs commands'
            }),
        },
        Writes: {
            Status: status.addItem("Cache Writes", {
                color: 'green',
                label: 'zfs commands'
            }),
        },
    };
};

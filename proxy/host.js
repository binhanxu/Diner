const Host=function(oldHost)
{
    this.dishes=oldHost.dishes || {};
    this.servedGuests=oldHost.servedGuests || {};
};

module.exports=Host;
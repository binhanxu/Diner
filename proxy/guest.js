const Guest=function(oldGuest)
{
    this.favHosts=oldGuest.favHosts || {};
};

module.exports=Guest;
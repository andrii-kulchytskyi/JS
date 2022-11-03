function enough(cap, on, wait) {
    // your code here
    return on+wait>cap? on+wait-cap:0;
}
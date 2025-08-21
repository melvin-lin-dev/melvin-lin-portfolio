while (developer.isAwake()) {
    developer.takeSip(coffee);

    if (coffee.isEmpty()) {
        coffee.refill();
        console.log("☕ Coffee refilled — productivity +100%");
    }

    if (deadline.isClose()) {
        console.log("⚡ Turbo mode activated!");
        developer.caffeineBoost();
    }
}

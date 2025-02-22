// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import { AggregatorV3Interface } from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceFeed {
    /// Add information about price feeds here ....

    // /**
    //  * Network: Ethereum Goerli
    //  * Aggregator: ETH/USD
    //  * Address: 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
    //  */
    // AggregatorV3Interface constant priceFeed = AggregatorV3Interface(0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e);

    // /**
    //  * Returns the latest price
    //  */
    // function usdPerETH() internal view returns (uint256) {
    //     (
    //         /*uint80 roundID*/,
    //         int price,
    //         /*uint startedAt*/,
    //         /*uint timeStamp*/,
    //         /*uint80 answeredInRound*/
    //     ) = priceFeed.latestRoundData();

    //     return uint256(price);
    // }

    // Check if a path exist to know the value of input token in Eth.
    function hasPriceFeed(address token) internal returns (bool) {}

    function isTokenPaymentSufficient(address token, uint amount, uint priceInEth) internal returns (bool) {}
}

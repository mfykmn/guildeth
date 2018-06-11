pragma solidity ^0.4.23;

contract SampleContract {
  string data;

  function set(string _message) public {
    data = _message;
  }

  function get() public constant returns (string _data) {
    return data;
  }
}
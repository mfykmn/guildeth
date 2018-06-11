# 環境準備
```bash
## truffle
$ truffle init

## yarn
$ yarn init
$ yarn add zeppelin-solidity
$ yarn add truffle-hdwallet-provider // python2.7必須
```

# テストネットにデプロイ
```
# コードのコンパイル(やらなくてもいいかも？
$ truffle compile

# Ethereum ブロックチェーンのエミュレータの起動
$ truffle develop

# マイグレーション
truffle(develop)> migrate
or
$ truffle migrate --network development
```

# Ropstenネットにデプロイ
```
# 環境変数に設定する
$ export ROPSTEN_MNEMONIC="*****"
$ export INFURA_ACCESS_TOKEN="*****"


# コードのコンパイル(やらなくてもいいかも？
$ truffle compile

# マイグレーション
$ truffle migrate --network ropsten
```

# Gethローカルネットにデプロイ
```
# コードのコンパイル(やらなくてもいいかも？
$ truffle compile

# マイグレーション
$ truffle migrate --network geth
```

# Ganacheにデプロイ
```
# コードのコンパイル(やらなくてもいいかも？
$ truffle compile

# マイグレーション
$ truffle migrate --network ganache
```
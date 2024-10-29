import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { PiCoinsFill } from "react-icons/pi";
import { BiLogoTelegram } from "react-icons/bi";
import { IoBarChartSharp } from "react-icons/io5";
import { HiMiniBellAlert } from "react-icons/hi2";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const Home = () => {
  const [toCurrency, setToCurrency] = useState("CAD");
  const [miq, setMiq] = useState(1);
  const [valuta, setValuta] = useState({});
  const [changeRate, setchangeRate] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("BIF");

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((data) => data.json())
      .then((data) => {
        setValuta(data.rates);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((data) => data.json())
        .then((data) => {
          setchangeRate(data.rates[toCurrency]);
        });
    }
  }, [fromCurrency, toCurrency]);
  const convertedMiq = (miq * changeRate).toFixed(2);

  return (
    <div>
      <Header />
      <div className="container  pl-40 pr-40 bg-[#081356]">
        <h2 className="text-center text-5xl font-semibold text-white pt-16">
          Global currency conversions & money transfers
        </h2>
        <p className="text-slate-400 text-center pt-5 text-2xl pb-14 font-semibold">
          Leading the world in currency information and global transfers for 30+
          years
        </p>
      </div>
      <div className="flex flex-col pb-20 justify-center bg-[#081356] items-center">
        <div className="bg-white w-[1200px] p-20 rounded-3xl shadow-md shadow-black ">
          <div className="flex border p-2 justify-between rounded-3xl">
            <p className="flex items-center gap-1  w-[250px] p-1 rounded-2xl justify-center text-slate-700 hover:bg-slate-700 hover:text-white font-semibold text-md">
              <PiCoinsFill /> Convert
            </p>
            <p className="flex items-center gap-1  w-[250px] p-1 rounded-2xl justify-center text-slate-700 hover:bg-slate-700 hover:text-white font-semibold text-md">
              <BiLogoTelegram />
              Telegram
            </p>
            <p className="flex items-center gap-1  w-[250px] p-1 rounded-2xl justify-center text-slate-700 hover:bg-slate-700 hover:text-white font-semibold text-md">
              <IoBarChartSharp />
              Charts
            </p>
            <p className="flex items-center gap-1  w-[250px] p-1 rounded-2xl justify-center text-slate-700 hover:bg-slate-700 hover:text-white font-semibold text-md">
              <HiMiniBellAlert />
              Alers
            </p>
          </div>
          <div className="flex items-start gap-3 justify-between mt-7">
            <div>
              <span className="  text-3xl rounded-md border-gray-800  flex items-center  border ">
                <GiTakeMyMoney />
                <input
                  className=" p-2 rounded-r-2xl outline-none "
                  type="number"
                  value={miq}
                  onChange={(e) => setMiq(e.target.value)}
                />
              </span>
              <h2 className="border  pl-3 pr-3 flex items-center gap-1 mt-4 text-2xl text-gray-400">
                {" "}
                <FaMoneyBillTransfer />: {convertedMiq} {toCurrency}
              </h2>
            </div>
            <div></div>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-[400px] h-[50px]  border border-blue-700 rounded-md"
            >
              {Object.keys(valuta).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-[400px] h-[50px] border border-blue-700 rounded-md"
            >
              {Object.keys(valuta).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

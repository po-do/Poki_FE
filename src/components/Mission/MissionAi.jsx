import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import MissionRecommendModal from "./MissionRecommendModal";

const ageOptions = [
  { name: "7~8 세", inStock: true },
  { name: "9~10 세", inStock: true },
  { name: "11~12 세", inStock: true },
  { name: "13~14 세", inStock: true },
];

const placeOptions = [
  { name: "집", inStock: true },
  { name: "학교", inStock: true },
  { name: "학원", inStock: true },
];

const pointOptions = [
  { name: "자립성", inStock: true },
  { name: "협동력", inStock: true },
  { name: "사고력", inStock: true },
  { name: "자신감", inStock: true },
];

function AgeFilter(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PlaceFilter(...classes) {
  return classes.filter(Boolean).join(" ");
}

function PointFilter(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MissionAi() {
  const [ageMem, setAgeMem] = useState([]);
  const [placeMem, setplaceMem] = useState([]);
  const [pointMem, setpointMem] = useState([]);
  const [isModal, setIsModal] = useState(false);
  
  const openModal = () => {
    setIsModal(true);
  }

  const closeModal = () => {
    setIsModal(false);
  }

  const handleModal = () => {
    openModal();
  }

  return (
    <div>
      <div className="">
        <h3 className="text-xl font-bold mb-4">AI에게 미션 추천 받기</h3>
        <p className="ml-4 mt-2 text-sm text-gray-700">
          {" "}
          3개의 키워드를 골라 AI에게 미션을 추천 받아 보세요.{" "}
        </p>
      </div>

      {/* 나이 태그 */}
      <RadioGroup value={ageMem} onChange={setAgeMem} className="mt-2">
        <RadioGroup.Label className="sr-only">
          Choose age option
        </RadioGroup.Label>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 m-5">
          <h3 className="flex item-center justify-center text-xl font-bold mb-4">
            나이
          </h3>
          {ageOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                AgeFilter(
                  option.inStock
                    ? "cursor-pointer focus:outline-none"
                    : "cursor-not-allowed opacity-25",
                  active ? "ring-2 ring-gray-500 ring-offset-2" : "",
                  checked
                    ? "bg-gray-400 text-white hover:bg-gray-500"
                    : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center rounded-3xl py-3 px-3 text-sm font-semibold uppercase sm:flex-1"
                )
              }
              disabled={!option.inStock}
            >
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {/* 장소 태그 */}
      <RadioGroup value={placeMem} onChange={setplaceMem} className="mt-2">
        <RadioGroup.Label className="sr-only">
          Choose place option
        </RadioGroup.Label>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 m-5">
          <h3 className="flex item-center justify-center text-xl font-bold mb-4">
            장소
          </h3>
          {placeOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                PlaceFilter(
                  option.inStock
                    ? "cursor-pointer focus:outline-none"
                    : "cursor-not-allowed opacity-25",
                  active ? "ring-2 ring-gray-500 ring-offset-2" : "",
                  checked
                    ? "bg-gray-400 text-white hover:bg-gray-500"
                    : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center rounded-3xl py-3 px-3 text-sm font-semibold uppercase sm:flex-1"
                )
              }
              disabled={!option.inStock}
            >
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {/* 키워드 태그 */}
      <RadioGroup value={pointMem} onChange={setpointMem} className="mt-2">
        <RadioGroup.Label className="sr-only">
          Choose point option
        </RadioGroup.Label>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 m-5">
          <h3 className="flex item-center justify-center text-xl font-bold mb-4">
            키워드
          </h3>
          {pointOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ active, checked }) =>
                PointFilter(
                  option.inStock
                    ? "cursor-pointer focus:outline-none"
                    : "cursor-not-allowed opacity-25",
                  active ? "ring-2 ring-gray-500 ring-offset-2" : "",
                  checked
                    ? "bg-gray-400 text-white hover:bg-gray-500"
                    : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center rounded-3xl py-3 px-3 text-sm font-semibold uppercase sm:flex-1"
                )
              }
              disabled={!option.inStock}
            >
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      {/* 추천 받기 버튼 */}
      <div className="flex justify-end">
        <button
          type="button"
          className="block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleModal}
        >
          추천 받기
        </button>
        {isModal && (
            <MissionRecommendModal onClose={closeModal} ageMem={ageMem} placeMem={placeMem} pointMem={pointMem} />
        )}
      </div>
    </div>
  );
}

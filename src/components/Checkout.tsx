"use client";
import Image from "next/image";
import { FC, SetStateAction, useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

interface OptionType {
  value: string;
  label: string;
}

const roomOptions: OptionType[] = [
  { value: "rooms", label: "Rooms" },
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
];

const countryOptions: OptionType[] = [
  { value: "+91", label: "🇮🇳 +91" },
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+44", label: "🇬🇧 +44" },
  { value: "+61", label: "🇦🇺 +61" },
  { value: "+971", label: "🇦🇪 +971" },
  { value: "+65", label: "🇸🇬 +65" },
];

const Checkout: FC = () => {
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0]);
  const [guestName, setGuestName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  const inputHeight = '50px';
  const commonInputStyles = {
    height: inputHeight,
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    padding: '0 15px',
    backgroundColor: 'white',
    width: '100%',
    color: '#0D2235',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
  };

  const CustomDateInput = ({
    value,
    onClick,
    placeholder,
  }: {
    value?: string;
    onClick?: () => void;
    placeholder?: string;
  }) => (
    <div
      className='custom-date-input tw-cursor-pointer tw-w-full'
      style={commonInputStyles}
      onClick={onClick}
    >
      <span className={`tw-whitespace-nowrap ${value ? "tw-text-heading" : "tw-text-gray-400"}`}>
        {value || placeholder || "Check-in - Out"}
      </span>
    </div>
  );

  return (
    <div
      className='checkout-area position-relative z-3 tw_fade_anim'
      data-delay='.3'
    >
      <div className='container'>
        <div className='checkout-bg bg-white tw-py-6 tw-px-10 tw-rounded-2xl tw-shadow-2xl tw-mx-auto tw-w-fit'>
          <div className='checkout-main-wrapper tw-flex tw-flex-nowrap tw-items-end tw-justify-center'>

            {/* Stay Duration */}
            <div className='checkout-wrapper tw-flex-shrink-0' style={{ width: '190px', borderRight: '1.2px solid #f1f1f1', paddingRight: '15px' }}>
              <label className='tw-text-sm fw-normal font-body d-flex align-items-center tw-gap-3 tw-mb-5' style={{ color: '#0D2235' }}>
                <span>
                  <Image
                    width={21}
                    height={22}
                    src='/assets/images/icons/checkout-icon1.svg'
                    alt='icon'
                  />
                </span>
                Stay Duration
              </label>
              <DatePicker
                selectsRange={true}
                startDate={checkInDate || undefined}
                endDate={checkOutDate || undefined}
                onChange={(update: [Date | null, Date | null]) => {
                  const [start, end] = update;
                  setCheckInDate(start);
                  setCheckOutDate(end);
                }}
                customInput={
                  <CustomDateInput
                    placeholder={
                      checkInDate && checkOutDate
                        ? `${checkInDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${checkOutDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
                        : 'Check-in - Out'
                    }
                  />
                }
                wrapperClassName='tw-w-full'
                minDate={new Date()}
                popperPlacement='bottom-start'
                dateFormat="MMM dd, yyyy"
              />
            </div>

            {/* Name */}
            <div className='checkout-wrapper tw-flex-shrink-0' style={{ width: '170px', borderRight: '1.2px solid #f1f1f1', paddingRight: '15px', paddingLeft: '15px' }}>
              <label className='tw-text-sm fw-normal font-body d-flex align-items-center tw-gap-3 tw-mb-5' style={{ color: '#0D2235' }}>
                <span>
                  <Image
                    width={20}
                    height={20}
                    src='/assets/images/icons/checkout-icon4.svg'
                    alt='user icon'
                  />
                </span>
                Guest Name
              </label>
              <input
                type="text"
                className="focus:tw-outline-none"
                style={commonInputStyles}
                placeholder="Full Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />
            </div>

            {/* Mobile */}
            <div className='checkout-wrapper tw-flex-shrink-0' style={{ width: '210px', borderRight: '1.2px solid #f1f1f1', paddingRight: '15px', paddingLeft: '15px' }}>
              <label className='tw-text-sm fw-normal font-body d-flex align-items-center tw-gap-3 tw-mb-5' style={{ color: '#0D2235' }}>
                <span>
                  <Image
                    width={21}
                    height={22}
                    src='/assets/images/icons/checkout-icon2.svg'
                    alt='phone icon'
                  />
                </span>
                Mobile Number
              </label>
              <div
                style={{
                  ...commonInputStyles,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  padding: '0 15px',
                  gap: '5px'
                }}
              >
                <span
                  className="tw-text-sm tw-text-gray-500 tw-font-medium"
                  style={{
                    whiteSpace: 'nowrap',
                    marginRight: '5px'
                  }}
                >
                  +91
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  className="tw-flex-1 tw-h-full tw-text-sm tw-outline-none tw-border-none tw-bg-transparent"
                  placeholder=""
                  style={{
                    padding: 0,
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    minWidth: 0,
                    backgroundColor: 'transparent'
                  }}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                />
              </div>
            </div>

            {/* Room */}
            <div className='checkout-wrapper tw-flex-shrink-0' style={{ width: '110px', borderRight: 'none', paddingRight: '15px', paddingLeft: '15px' }}>
              <label className='tw-text-sm fw-normal font-body d-flex align-items-center tw-gap-3 tw-mb-5' style={{ color: '#0D2235' }}>
                <span>
                  <Image
                    width={20}
                    height={20}
                    src='/assets/images/icons/checkout-icon3.svg'
                    alt='room icon'
                  />
                </span>
                Room
              </label>
              <Select
                options={roomOptions}
                value={selectedRoom}
                onChange={(option) => option && setSelectedRoom(option)}
                className='custom-select-container'
                classNamePrefix='custom-select'
                styles={{
                  control: (base) => ({
                    ...base,
                    height: inputHeight,
                    borderRadius: '8px',
                    border: '1.2px solid #e2e8f0',
                    boxShadow: 'none',
                    '&:hover': {
                      borderColor: '#e2e8f0'
                    }
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: '0 12px',
                    margin: 0,
                  }),
                }}
              />
            </div>

            {/* Button */}
            <div className='checkout-wrapper tw-flex-shrink-0' style={{ border: 'none', paddingLeft: '15px', paddingRight: 0 }}>
              <div className='checkout-button common-hover-yellow'>
                <button
                  className='tw-btn-hover-black bg-main-600 tw-text-white tw-font-bold tw-text-sm tw-px-8 tw-rounded-lg d-inline-flex align-items-center tw-gap-2'
                  style={{ height: inputHeight }}
                >
                  BOOK NOW
                  <i className='ph-bold ph-arrow-up-right'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

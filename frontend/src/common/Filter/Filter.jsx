import React from "react";
import styles from "./Filter.module.scss";
import {config} from "../../utils/Filter/config";
import Polarization from "./Polarization/Polarization";
import FrameForGlasses from "./FrameForGlasses/FrameForGlasses";
import Brand from "./Brand/Brand";
import Gender from "./Gender/Gender";
import Sale from "./Sale/Sale";

const Filter = ({filterIsActive, allFilterClickListener, isSale, setState}) => {
  return (
    <div className={filterIsActive ? styles.filterWrapperVisible : styles.filterWrapperHidden}>
      <div className={styles.filterWrapper}>
        <Polarization
          config={config.polarization}
          allFilterClickListener={allFilterClickListener}
          setState={setState}
        />
        <FrameForGlasses
          config={config.frameForGlasses}
          allFilterClickListener={allFilterClickListener}
          setState={setState}
        />
        <Brand
          config={config.brand}
          allFilterClickListener={allFilterClickListener}
          setState={setState}
        />
        <div>
          {
            isSale
              ? <Gender
                config={config.gender}
                allFilterClickListener={allFilterClickListener}
                setState={setState}
              />
              : <Sale
                config={config.sale}
                allFilterClickListener={allFilterClickListener}
                setState={setState}
              />
          }

        </div>
      </div>
    </div>
  );
};

export default Filter;

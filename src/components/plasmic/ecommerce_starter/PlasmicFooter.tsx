// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m1NBpNyVff55Zfidoo96K
// Component: tq70WOqYWkeM
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: y49lYtjD6teJ/component
import Button from "../../Button"; // plasmic-import: RwhbLl_Om_ZC/component
import CopyrightSocialLanguage from "../../CopyrightSocialLanguage"; // plasmic-import: rLteRX8uF0XR/component

import { useScreenVariants as useScreenVariantsglcu7Rs72YfE } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: glcu7RS72yfE/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: m1NBpNyVff55Zfidoo96K/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: tq70WOqYWkeM/css

import EmailIcon from "./icons/PlasmicIcon__Email"; // plasmic-import: uhX7KlEjL73G/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 7hXm7BscgLm-/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: DmYYd1D1uHJ9/icon
import DeliveryIcon from "./icons/PlasmicIcon__Delivery"; // plasmic-import: etrhRhGGR1oV/icon
import EnterIcon from "./icons/PlasmicIcon__Enter"; // plasmic-import: KbvZ4agWvK8X/icon
import QuestionIcon from "./icons/PlasmicIcon__Question"; // plasmic-import: w11N5tEqPTdZ/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"section">;
  textInput?: p.Flex<typeof TextInput>;
  copyrightSocialLanguage?: p.Flex<typeof CopyrightSocialLanguage>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  dataFetches?: PlasmicFooter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsglcu7Rs72YfE()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__nMc0Y)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__jgb1F)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vIiqn
            )}
          >
            {"Subscribe"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bp1S
            )}
          >
            {
              "Sign up for exclusive offers, original stories, activism, events and more."
            }
          </div>

          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            placeholder={"Email address..." as const}
            showStartIcon={"showStartIcon" as const}
            startIcon={
              <EmailIcon
                className={classNames(projectcss.all, sty.svg__lBo8D)}
                role={"img"}
              />
            }
          />

          <Button
            className={classNames("__wab_instance", sty.button__ebpxV)}
            colors={"black" as const}
          >
            {"Sign me up"}
          </Button>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___2NkxR)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__m2ERo
            )}
          >
            {"Help"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bvKfQ)}
          >
            <Button
              showStartIcon={"showStartIcon" as const}
              startIcon={
                <DeliveryIcon
                  className={classNames(projectcss.all, sty.svg___1Lzyk)}
                  role={"img"}
                />
              }
            >
              {"Order status"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__cEcfY)}
              showStartIcon={"showStartIcon" as const}
              startIcon={
                <EnterIcon
                  className={classNames(projectcss.all, sty.svg__bVqc)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6OmhF
                )}
              >
                {"Returns and exchanges"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___0U6FX)}
              showStartIcon={"showStartIcon" as const}
              startIcon={
                <QuestionIcon
                  className={classNames(projectcss.all, sty.svg__teXu9)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8IfLz
                )}
              >
                {"Help center"}
              </div>
            </Button>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__gDlcd)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qDhX
            )}
          >
            {"More info"}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__qAqek)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__naTEx)}
            >
              <Button>{"Gift cards"}</Button>

              <Button
                className={classNames("__wab_instance", sty.button__rqjrH)}
              >
                {"Find a store"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__yKouO)}
              >
                {"Careers"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__jik4E)}
              >
                {"Sitemap"}
              </Button>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dvaoM)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__hI5L)}
              >
                {"Group sales"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__qpQep)}
              >
                {"Privacy policy"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__gORiV)}
              >
                {"Contact us"}
              </Button>
            </p.Stack>
          </div>
        </p.Stack>
      </p.Stack>

      <CopyrightSocialLanguage
        data-plasmic-name={"copyrightSocialLanguage"}
        data-plasmic-override={overrides.copyrightSocialLanguage}
        className={classNames("__wab_instance", sty.copyrightSocialLanguage)}
      />
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "copyrightSocialLanguage"],
  textInput: ["textInput", "textbox"],
  copyrightSocialLanguage: ["copyrightSocialLanguage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  textInput: typeof TextInput;
  copyrightSocialLanguage: typeof CopyrightSocialLanguage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFooter__Fetches;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    copyrightSocialLanguage: makeNodeComponent("copyrightSocialLanguage"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */

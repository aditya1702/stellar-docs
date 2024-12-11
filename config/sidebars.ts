import { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  build: [
    {
      type: 'autogenerated',
      dirName: 'build',
    },
  ],
  learn: [
    {
      type: 'autogenerated',
      dirName: 'learn',
    },
  ],
  tokens: [
    {
      type: 'autogenerated',
      dirName: 'tokens',
    },
  ],
  data_overview: [
    'data/README',
    'data/requirements',
    { type: 'html', value: '<small>Data Availability</small>', defaultStyle: true, className: 'networkMenuHtmlItem'},
    { type: 'ref', id: 'data/rpc/README', label: 'Stellar RPC'},
    { type: 'ref', id: 'data/hubble/README', label: 'Hubble'},
    { type: 'ref', id: 'data/horizon/README', label: 'Horizon'},
    { type: 'ref', id: 'data/galexie/README', label: 'Galexie'},
  ],
  tools: [
    {
      type: 'autogenerated',
      dirName: 'tools',
    },
    { type: 'html', value: '<small>SDF Platforms</small>', defaultStyle: true, className: 'networkMenuHtmlItem'},
    { type: 'link', href: '/platforms/anchor-platform', label: 'Anchor Platform'},
    { type: 'link', href: '/platforms/stellar-disbursement-platform', label: 'Stellar Disbursement Platform'},
  ],
  networks: [
    {
      type: 'autogenerated',
      dirName: 'networks',
    },
  ],
  validators: [
    {
      type: 'autogenerated',
      dirName: 'validators',
    },
  ],
  horizon: [
    {
      type: 'category',
      label: 'Horizon',
      items: [
        {
          type: "autogenerated",
          dirName: "data/horizon",
        },
      ],
      collapsible: false,
    },
  ],
  hubble: [
    {
      type: 'category',
      label: 'Hubble',
      items: [
        {
          type: "autogenerated",
          dirName: "data/hubble",
        },
      ],
      collapsible: false,
    },
  ],
  galexie: [
    {
      type: 'category',
      label: 'Galexie',
      items: [
        {
          type: "autogenerated",
          dirName: "data/galexie",
        },
      ],
      collapsible: false,
    },
  ],
  soroban_rpc: [
    {
      type: "category",
      label: "Stellar RPC",
      items: [
        {
          type: 'autogenerated',
          dirName: 'data/rpc',
        },
      ],
      collapsible: false,
    },
  ],
};

export default sidebars;

import { createMachine } from "xstate";

/** @xstate-layout N4IgpgJg5mDOIC5QBUD2BXAxgCwLQAVUAnAFwEMAbAAgFkycBLAOzADoGT0XYB9ABwpkAnhQawSsVgDdK6MAGFsqBpjgBiAKp8IZEmCr5BIsSUSg+qWBwaomZkAA9EuAEwBWACysAjAA4X3gBsAOxuAW4ADADMHoEANCBCiB4ewawuvsHhwf6BbsEeAL6FCWhYeISklLT02MxsHFxwPLDY6ABm7RRg-Eai4qwA8kxqaFBQ3QDKbZ3d9hZWJDZ2SI7O3lGBrAWxgd4bEQCc3i4ebglJCMHeaRlZp4ER3pEFxaUYOATE5NR0jCzsTjcFozLo9ATCfokIadUaocZTUFzVYLay2exOBC4DZbHYhNxRCJuPaHQ6+C6IYJ5dKZFxRQ6eQIuN4gMqfSo-Gr-BpA5pEMB8MC6XqQkww9pwhH6ABKAqFphRljRK1AmOxm22KXxhOJ3lJ5MSiBcoRp90iqXc+SiLLZFW+1T+dQBjWB-MFwohxgGk1sUElExlct08yVS3Rq0x3g8vlYvgZh0eZ38cZcFIQxrcppc7giFrcVptHztVV+tXqgKavDd8pFXuhhlF4n93SosvdCvMoeWGMQUZjcbchwKgSiLlJgUCBsuUcO21pUQJbn29OCwUL5S+Ja5Tp5ldrzCgLXIelYkxIqD4gogzf0DaEB5Di27EcQC4iPjfEWNwQioTyaY8Uk53uEd80Zdd2XtUtuQrYFPQPI9dDYO8DxvAwjAfRUn3DVVe0yVhNkOXMCTpQ5UiHACgJyECF3zWIIOLTlHXLF1mlaDowXFNDpg45FO2wlU1gQKJfC2XxMl8DwjhifViTTXwIhjYIYm8CI8iJKITmtEpWSLTcmLLZ1eV4djZjYYZuKRMBH2VHt01-VgGVUo4J3zOlfCieTFO2FSRKHRSXCOBj9IdQzd1dINoUGWExgDVtIpssNBLVfZMzyOkRI8QiFK-NNVOCWcGVCNTwliXNgo5UKYNYqtItPX00LbeVEufXDhNuFxHlJMc9Q8DZTjy05MzpPq9kCBMQhCCqoO3FjjJ4atdFYO8oUahKsNsl8sXcbxWHG1dxJE1TDhXPKgkzajRxxMkpO8YodKYVAIDgexbRC6Cd1g5pPShSQZAoORFGUVR4A2pK7NcSdNViBTfCXNSRM8w0EAJWc7jpYcqQyNxpq3ZijL3H6TFB-jNra1xDhcaHJ0U+GRw8tMogKLNs2yG5Dlxgzqvm0ywVrKEhkE1Fwa2-Y9rOBNKZ-YkyWzNMsl2k4iXuKkUm094N0qj65r3Xnun5sVovaFqcKE1xlOp2G6cR+W-D2wL8mzVWss5qrPpqkFePBPoTBN5LnDHNI8St1T6aRy5AhSLMgjhslHhxnS3q12aCYi9sDYGI2-Yh40okt2nQ5t5HnkVh3lPyJkfwXV3tdTvlIoz6EfSYKBs9FsT408Y4MjOWi006tHaQ8DIRtEmuU-C+v06JgYVt9sHWqEwkqYJPIiMm0Izg8PKCXtokPK-R5QiZ8f8cn2rp598Q2-JwP87hwuGeRqlgPc5MmTHBONcgvGwq+3h4It0QieM8F4rw3yEp1LYy97h+GJJEbwAFTh7UHGEQCxpRLElPn-D2gDDziCQstDCLcIGYmNO+cSikkyZC-EOc4yNdSORnFGKMq4TiBGwdzQmxD8HHmsgvU2kYRwEXGsRUc9JyLBEZkuFBDIMw7QRkUROelk5n3-p7My4pSFGgZARfMxxiIFSZjEeWGRWDEmUvSTSI4grKM1jNNRHs9bmSFl2QROjMy0QMWcIxBR5IFVYD4sI40ToiXyJw92PMrLaIQH4POTkIguTyGEIuEd8zmJCCpY4C5AJrjsT-LmkS9yLSip0GJrgsoEVXKkSI40zgjlTMXX8ecgkBAKnGYiESdZp3lPVEhAj-YIDOOY2I9IRw-n8LEBkeVmmBPyGEdmHSzhdLrhfXpc9r4DJzsMuGUk+qxAJDcUcg0RI+T6lpQCqkT75MYm7bpU9mpbK2ubNKQ4cgeV8MdU6TTElzNCKcMZUYwgrP4aTEW5Mrr32tk-S4edqJDU6jHGIIl7qFCAA */
createMachine({
  type: "parallel",
  states: {
    itunes_playlists: {
      initial: "valueChoices",
      states: {
        valueChoices: {
          on: {
            "Update Playlist": {
              actions: "update_playlist",
              target: "valueChoices",
              internal: false,
            },
          },
        },
      },
    },
    itunes_shuffle_playlist: {
      initial: "Off",
      states: {
        On: {on: {ToggleShuffle: {target: "Off"}}},
        Off: {on: {ToggleShuffle: {target: "On"}}},
      },
    },
    itunes_repeat_playlist: {
      initial: "Off",
      states: {
        Off: {on: {"Toggle Repeat": {target: "Song"}}},
        Song: {on: {"Toggle Repeat": {target: "Playlist"}}},
        Playlist: {on: {"Toggle Repeat": {target: "Off"}}},
      },
    },
    itunes_playing_state: {
      initial: "Stopped",
      states: {
        Stopped: {on: {"Toggle Playing": {target: "Playing"}}},
        Playing: {on: {"Toggle Playing": {target: "Stopped"}}},
      },
    },
    itunes_shuffle: {
      initial: "Off",
      states: {
        Off: {on: {"Toggle Shuffle": {target: "On"}}},
        On: {on: {"Toggle Shuffle": {target: "Off"}}},
      },
    },
    itunes_repeat: {
      initial: "Off",
      states: {
        Off: {on: {"Toggle Repeat": {target: "Song"}}},
        Song: {on: {"Toggle Repeat": {target: "Playlist"}}},
        Playlist: {on: {"Toggle Repeat": {target: "Off"}}},
      },
    },
  },
  id: "Touch-Portal Machine",
});

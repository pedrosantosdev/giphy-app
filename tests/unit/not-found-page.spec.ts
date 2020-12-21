import { shallowMount } from "@vue/test-utils";
import NotFoundPage from "@/views/404.vue";

describe("404.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Nothing to see here";
    const wrapper = shallowMount(NotFoundPage);
    expect(wrapper.text()).toMatch(msg);
  });
});
